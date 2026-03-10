import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados para controlar o que está aberto
  const [menuPrincipal, setMenuPrincipal] = useState(false);
  const [listaExp, setListaExp] = useState(false);
  const [listaEdu, setListaEdu] = useState(false);
  const [cardAtivo, setCardAtivo] = useState(null);

  // Função para alternar os cards de texto
  const toggleCard = (id) => {
    setCardAtivo(cardAtivo === id ? null : id);
  };

  return (
    <div className="App">
      <h1>Organograma de Carreira</h1>

      <div className="tree">
        <ul>
          <li>
            <div 
              className="caixa home-btn" 
              onClick={() => setMenuPrincipal(!menuPrincipal)}
            >
              RICARDO
            </div>

            {/* Menu Principal */}
            <ul className={`subnivel ${menuPrincipal ? 'mostrar' : ''}`}>
              
              {/* Sobre Mim */}
              <li>
                <div className="caixa" onClick={() => toggleCard('sobre')}>👤 Sobre Mim</div>
                <div className={`info-card ${cardAtivo === 'sobre' ? 'mostrar-card' : ''}`}>
                  <strong>Perfil Profissional:</strong><br />
                  Engenheiro Mecânico, Engenheiro de Produção Mecânica, Advogado e Corretor de Imóveis.
                </div>
              </li>

              {/* Experiência */}
              <li>
                <div className="caixa" onClick={() => setListaExp(!listaExp)}>💼 Experiência</div>
                <ul className={`subnivel ${listaExp ? 'mostrar' : ''}`}>
                  <li>
                    <div className="caixa" onClick={() => toggleCard('exp1')}>Consultoria</div>
                    <div className={`info-card ${cardAtivo === 'exp1' ? 'mostrar-card' : ''}`}>
                      <em>2017 - Atual</em><br /> Atuação técnica e estratégica.
                    </div>
                  </li>
                  <li>
                    <div className="caixa" onClick={() => toggleCard('exp2')}>Advocacia</div>
                    <div className={`info-card ${cardAtivo === 'exp2' ? 'mostrar-card' : ''}`}>
                      <em>2016 - 2026</em><br /> Escritório especializado.
                    </div>
                  </li>
                </ul>
              </li>

              {/* Formação */}
              <li>
                <div className="caixa" onClick={() => setListaEdu(!listaEdu)}>🎓 Formação</div>
                <ul className={`subnivel ${listaEdu ? 'mostrar' : ''}`}>
                  <li>
                    <div className="caixa" onClick={() => toggleCard('edu1')}>Graduação</div>
                    <div className={`info-card ${cardAtivo === 'edu1' ? 'mostrar-card' : ''}`}>
                      <strong>Universidades:</strong><br /> Engenharias, Direito e ADS.
                    </div>
                  </li>
                </ul>
              </li>

              {/* Contato */}
              <li>
                <div className="caixa" onClick={() => toggleCard('contato')}>📞 Contato</div>
                <div className={`info-card ${cardAtivo === 'contato' ? 'mostrar-card' : ''}`}>
                  📧 ricardo@exemplo.com<br />
                  📍 Indaiatuba, SP
                </div>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;