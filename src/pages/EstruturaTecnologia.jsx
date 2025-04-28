import React from 'react';

const EstruturaTecnologia = () => {
  return (
    <div className="tecnologia-page">
      {/* Hero Section */}
      <section className="hero-section-tecnologia">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold text-white">Life Data</h1>
              <p className="lead text-white">Soluções tecnológicas avançadas para gestão hospitalar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Solução */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Sobre a Life Data</h2>
              <p className="lead">
                A Life Data é uma solução completa de gestão hospitalar que integra todos os processos do Hospital Sabara,
                proporcionando eficiência operacional e melhor experiência para pacientes e profissionais de saúde.
              </p>
            </div>
            <div className="col-md-6">
              <img 
                src="/life-data-dashboard.jpg" 
                alt="Dashboard Life Data" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Dashboards */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nossos Dashboards em Ação</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img 
                    src="/dashboard-1.jpg" 
                    className="card-img-top" 
                    alt="Dashboard de Gestão"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dashboard de Gestão</h5>
                  <p className="card-text">Visão geral dos indicadores de desempenho do hospital</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img 
                    src="/dashboard-2.jpg" 
                    className="card-img-top" 
                    alt="Dashboard de Pacientes"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dashboard de Pacientes</h5>
                  <p className="card-text">Acompanhamento completo do fluxo de pacientes</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img 
                    src="/dashboard-3.jpg" 
                    className="card-img-top" 
                    alt="Dashboard Financeiro"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dashboard Financeiro</h5>
                  <p className="card-text">Análise detalhada dos indicadores financeiros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria do Produto */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Nosso Produto</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img 
                    src="/produto-1.jpg" 
                    className="card-img-top" 
                    alt="Interface do Sistema"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Interface Moderna</h5>
                  <p className="card-text">Design intuitivo e responsivo para melhor experiência do usuário</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img 
                    src="/produto-2.jpg" 
                    className="card-img-top" 
                    alt="Aplicativo Mobile"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Aplicativo Mobile</h5>
                  <p className="card-text">Acesso completo através de dispositivos móveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Benefícios da Solução</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                  <h4>Gestão Eficiente</h4>
                  <p>Controle completo de processos hospitalares com dados em tempo real</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-user-shield fa-3x text-primary mb-3"></i>
                  <h4>Segurança de Dados</h4>
                  <p>Proteção avançada das informações dos pacientes e da instituição</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                  <h4>Acesso Móvel</h4>
                  <p>Plataforma acessível de qualquer dispositivo, a qualquer momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Módulos Principais</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Prontuário Eletrônico</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Registro completo do paciente</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Histórico médico integrado</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Prescrições digitais</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Exames e resultados online</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Gestão Administrativa</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Agendamento inteligente</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Controle financeiro</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Gestão de estoque</li>
                    <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Relatórios personalizados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Diferenciais Life Data</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-brain fa-2x text-primary"></i>
                </div>
                <h5>Inteligência Artificial</h5>
                <p>Análise preditiva e sugestões inteligentes para melhor tomada de decisão</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-sync fa-2x text-primary"></i>
                </div>
                <h5>Integração Total</h5>
                <p>Sistema completamente integrado com outras plataformas do hospital</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="icon-circle mb-3">
                  <i className="fas fa-shield-alt fa-2x text-primary"></i>
                </div>
                <h5>Conformidade</h5>
                <p>Total conformidade com as normas de segurança e privacidade de dados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstruturaTecnologia; 