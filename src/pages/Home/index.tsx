import React from 'react';
import HomeLogo from '../../components/Logo';
import HomeCallToAction from '../../components/Home/CallToAction';
import './styles.css';

const Home: React.FC = () => (
  <div id="page-home">
    <div className="content">
      <HomeLogo />
      <main>
        <h1>Seu marketplace de coleta de resíduos</h1>
        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
        <HomeCallToAction link="/cadastro" />
      </main>
    </div>
  </div>
);

export default Home;
