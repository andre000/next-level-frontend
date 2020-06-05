/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Logo from '../../components/Logo';
import './style.css';

const CreatePoint = () => (
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
        <div className="field">
          <label htmlFor="name">
            Nome da entidade
          </label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="field">
            <label htmlFor="whatsapp">
              WhatsApp
            </label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Endereço</h2>
          <span>Selecione o endereço no mapa</span>
        </legend>

        <div className="field-group">
          <div className="field">
            <label htmlFor="uf">
              Estado (UF)
            </label>
            <select name="uf" id="uf">
              <option value="0"> Selecione uma UF </option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="city">
              Cidade
            </label>
            <select name="city" id="city">
              <option value="0"> Selecione uma cidade </option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Itens de Coleta</h2>
          <span>Selecione um ou mais itens abaixo</span>
        </legend>

        <ul className="items-grid">
          <li>
            <img src="http://localhost:3333/assets/oleo.svg" alt="Óleo" />
            <span>Óleo</span>
          </li>
          <li>
            <img src="http://localhost:3333/assets/oleo.svg" alt="Óleo" />
            <span>Óleo</span>
          </li>
          <li>
            <img src="http://localhost:3333/assets/oleo.svg" alt="Óleo" />
            <span>Óleo</span>
          </li>
          <li>
            <img src="http://localhost:3333/assets/oleo.svg" alt="Óleo" />
            <span>Óleo</span>
          </li>
          <li>
            <img src="http://localhost:3333/assets/oleo.svg" alt="Óleo" />
            <span>Óleo</span>
          </li>
          <li>
            <img src="http://localhost:3333/assets/oleo.svg" alt="Óleo" />
            <span>Óleo</span>
          </li>
        </ul>
      </fieldset>

      <button type="submit">
        Cadastrar ponto de coleta
      </button>
    </form>
  </div>
);

export default CreatePoint;
