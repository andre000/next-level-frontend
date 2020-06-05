import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const HomeLogo = () => {
  const location = useLocation();

  return (
    <header>
      <img src={logo} alt="Ecoleta" />
      {
        (location.pathname) !== '/' && (
          <Link to="/">
            <FiArrowLeft />
            Voltar para home
          </Link>
        )
      }
    </header>
  );
};

export default HomeLogo;
