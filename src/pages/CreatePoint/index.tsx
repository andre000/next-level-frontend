/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Logo from '../../components/Logo';
import BasicInput from '../../components/BasicInput';
import BasicSelect from '../../components/BasicSelect';
import CollectPoint from '../../components/CreatePoint/CollectPoint';
import './style.css';

const CreatePoint = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whats, setWhats] = useState('');
  const [uf, setUF] = useState('0');
  const [city, setCity] = useState('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const items = [
    {
      id: 1,
      title: 'Lâmpadas',
      image: 'http://localhost:3333/assets/lampadas.svg',
    },
    {
      id: 2,
      title: 'Pilhas e Baterias',
      image: 'http://localhost:3333/assets/baterias.svg',
    },
    {
      id: 3,
      title: 'Papéis e Papelão',
      image: 'http://localhost:3333/assets/papeis-papelao.svg',
    },
    {
      id: 4,
      title: 'Resíduos Eletrônicos',
      image: 'http://localhost:3333/assets/eletronicos.svg',
    },
    {
      id: 5,
      title: 'Resíduos Orgânicos',
      image: 'http://localhost:3333/assets/organicos.svg',
    },
    {
      id: 6,
      title: 'Óleo de Cozinha',
      image: 'http://localhost:3333/assets/oleo.svg',
    },
  ];

  const handleSelectedItems = (id: number) => {
    let tempItems = [...selectedItems];
    if (selectedItems.includes(id)) {
      tempItems = selectedItems.filter((i) => i !== id);
      return setSelectedItems(tempItems);
    }

    return setSelectedItems([
      ...selectedItems,
      id,
    ]);
  };

  return (
    <div id="page-create-point">
      <Logo />

      <form>
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
            value={name}
            onChange={setName}
          />

          <div className="field-group">
            <BasicInput
              id="email"
              label="E-mail"
              value={email}
              onChange={setEmail}
            />
            <BasicInput
              id="whatsapp"
              label="WhatsApp"
              value={whats}
              onChange={setWhats}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <div className="field-group">
            <BasicSelect
              id="uf"
              label="Estado (UF)"
              options={[{ value: 0, text: 'Selecione uma UF' }]}
              value={uf}
              onChange={setUF}
            />
            <BasicSelect
              id="city"
              label="Cidade"
              options={[{ value: 0, text: 'Selecione uma cidade' }]}
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

        <button type="submit">
          Cadastrar ponto de coleta
        </button>
      </form>
    </div>
  );
};

export default CreatePoint;
