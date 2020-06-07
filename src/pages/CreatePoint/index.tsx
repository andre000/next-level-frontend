/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { LatLngLiteral } from 'leaflet';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/Logo';
import BasicInput from '../../components/BasicInput';
import BasicSelect from '../../components/BasicSelect';
import CollectPoint from '../../components/CreatePoint/CollectPoint';
import PointMap from '../../components/CreatePoint/PointMap';
import { api, locationApi } from '../../services';
import './style.css';

const CreatePoint: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whats: '',
  });

  const [uf, setUF] = useState('0');
  const [city, setCity] = useState('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [ufList, setUfList] = useState<IBGEUFResponse[]>([]);
  const [cityList, setCityList] = useState<IBGECityResponse[]>([]);
  const [point, setPoint] = useState<LatLngLiteral>();
  const [initialPosition, setInitialPosition] = useState<LatLngLiteral>();
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api.get('/items')
      .then(({ data }) => {
        setItems(data || []);
      });
  }, []);

  useEffect(() => {
    locationApi.get('estados', {
      params: { orderBy: 'nome' },
    }).then(({ data }) => setUfList(data || []));
  }, []);

  useEffect(() => {
    if (uf === '0') {
      setCityList([]);
      return;
    }

    locationApi.get(`estados/${uf}/municipios`, {
      params: { orderBy: 'nome' },
    }).then(({ data }) => setCityList(data || []));
  }, [uf]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      setInitialPosition({ lat, lng });
    });
  }, []);

  const handleSelectedItems = (id: number) => {
    if (selectedItems.includes(id)) {
      return setSelectedItems(selectedItems.filter((i) => i !== id));
    }

    return setSelectedItems([
      ...selectedItems,
      id,
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!point?.lat || !point?.lng) {
      return;
    }

    setIsLoading(true);
    const savedPoint: Point = {
      uf,
      city,
      email: formData.email,
      name: formData.name,
      whatsapp: formData.whats,
      image: '',
      latitude: `${point.lat}`,
      longitude: `${point.lng}`,
      items: selectedItems,
    };

    api.post('/points', savedPoint)
      .then(() => {
        setUF('0');
        setCity('0');
        setFormData({
          name: '',
          email: '',
          whats: '',
        });
        setSelectedItems([]);
        setPoint(undefined);
      });

    setIsLoading(false);
    history.push('/');
  };

  return (
    <div id="page-create-point">
      <Logo />

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro do
          <br />
          ponto de coleta
        </h1>

        <fieldset>
          <legend><h2>Dados</h2></legend>
          <BasicInput
            id="name"
            label="Nome da entidade"
            value={formData.name}
            onChange={(name) => setFormData({ ...formData, name })}
          />

          <div className="field-group">
            <BasicInput
              id="email"
              label="E-mail"
              value={formData.email}
              onChange={(email) => setFormData({ ...formData, email })}
            />
            <BasicInput
              id="whatsapp"
              label="WhatsApp"
              value={formData.whats}
              onChange={(whats) => setFormData({ ...formData, whats })}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <PointMap
            point={point}
            setPoint={setPoint}
            initialPosition={initialPosition}
          />

          <div className="field-group">
            <BasicSelect
              id="uf"
              label="Estado (UF)"
              options={
                [
                  { value: '0', text: 'Selecione um Estado' },
                  ...ufList.map((ufItem) => ({ value: ufItem.sigla, text: ufItem.nome })),
                ]
              }
              value={uf}
              onChange={setUF}
            />
            <BasicSelect
              id="city"
              label="Cidade"
              options={
                cityList.length === 0
                  ? [{ value: '0', text: 'Selecione um Estado' }]
                  : [
                    { value: '0', text: 'Selecione uma Cidade' },
                    ...cityList.map((cityItem) => ({ value: cityItem.nome, text: cityItem.nome })),
                  ]
              }
              value={city}
              onChange={setCity}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map((i) => (
              <CollectPoint
                key={i.id}
                id={i.id}
                isSelected={selectedItems.includes(i.id)}
                image={i.image}
                title={i.title}
                setSelected={handleSelectedItems}
              />
            ))}
          </ul>
        </fieldset>

        <button type="submit" disabled={isLoading}>
          Cadastrar ponto de coleta
        </button>
      </form>
    </div>
  );
};

export default CreatePoint;
