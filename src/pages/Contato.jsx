import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contato = () => {
  return (
    <section className="contact-section pt-5">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7646280963265!2d-46.66071812526309!3d-23.576386662129836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ce20e8c2ed%3A0x3db2ab03bde9f9b6!2sAv.%20Ang%C3%A9lica%2C%201987%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001238-909!5e0!3m2!1spt-BR!2sbr!4v1714144970525!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container className="contact-content">
        <Row className="justify-content-end">
          <Col lg={6}>
            <Card className="contact-card">
              <Card.Body style={{ padding: '1.5rem' }}>
                <h2 className="text-center mb-4">Entre em Contato</h2>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome completo" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="seu@email.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Assunto</Form.Label>
                    <Form.Control type="text" placeholder="Assunto da mensagem" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Sua mensagem aqui..." />
                  </Form.Group>
                  <div className="text-end">
                    <Button variant="primary" type="submit" className="px-4">
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className="contact-info bg-transparent" style={{ maxHeight: '80vh' }}>
            <Card className="info-card bg-transparent" style={{ height: '100%' }}>
              <Card.Body>
                <h3 className="mb-3" style={{ fontSize: '1.2rem' }}>Unidades</h3>
                
                <div className="info-item mb-3 bg-transparent">
                  <h5 style={{ fontSize: '1rem' }}>Sabará Hospital Infantil</h5>
                  <p className="mb-1" style={{ fontSize: '0.9rem' }}>Av. Angélica, 1987</p>
                  <p className="mb-1" style={{ fontSize: '0.9rem' }}>São Paulo, SP</p>
                  <p className="mb-1" style={{ fontSize: '0.9rem' }}>CEP 01228-200</p>
                  <p className="mb-2" style={{ fontSize: '0.9rem' }}>Telefones: (11) 3155-2800 | (11) 3235-2800</p>
                  <a 
                    href="https://www.google.com/maps/place/Av.+Ang%C3%A9lica,+1987+-+Consola%C3%A7%C3%A3o,+S%C3%A3o+Paulo+-+SP,+01227-200/@-23.5498467,-46.6618719,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5831b28beb9b:0xfa5f4f78c8b2a089!8m2!3d-23.5498467!4d-46.659297!16s%2Fg%2F11c43x8_xz?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    style={{ fontSize: '0.8rem' }}
                  >
                    Ver no Google Maps
                  </a>
                </div>

                <div className="info-item bg-transparent">
                  <h5 style={{ fontSize: '1rem' }}>Centro de Excelência | Consultórios</h5>
                  <p className="mb-1" style={{ fontSize: '0.9rem' }}>Rua Mato Grosso, 306</p>
                  <p className="mb-1" style={{ fontSize: '0.9rem' }}>Conj. 1503 e 1806</p>
                  <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                    style={{ fontSize: '0.8rem' }}
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contato; 