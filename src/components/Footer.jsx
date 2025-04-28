import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1b37b4' }} className=" text- py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Hospital Sabara</h5>
            <p>Excelência em saúde e cuidado com você</p>
          </div>
          <div className="col-md-4">
            <h5>Contato</h5>
            <p>Telefone: (11) 1234-5678</p>
            <p>Email: contato@hospitalsabara.com.br</p>
          </div>
          <div className='col-md-4'>
            <p>Copyright © 2024 Hospital Infantil Sabará - Todos os direitos reservados</p>
            <p><a href="">Política de Privacidade</a>  <a href="">Política de Cookies Termos</a>  <a href="">Condições de Uso</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

