import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Serviços = () => {
  return (
    <section className="contact-section">
      <div className="contact-map-bg">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa"
        ></iframe>
      </div>
      <div className="contact-content">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Card className="contact-card">
                <Card.Body>
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
            {/* Se quiser, pode adicionar a coluna de informações aqui também */}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Serviços;