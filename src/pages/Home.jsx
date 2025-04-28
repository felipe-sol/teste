import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FilasStatus from '../components/FilasStatus';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
  return (
    <div>
      {/* Filas Status Section */}
      <FilasStatus />

      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <HeroCarousel />
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Nossos Serviços</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Pediatria</Card.Title>
                  <Card.Text>
                    Cuidados especializados para crianças, desde recém-nascidos
                    até adolescentes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Cardiologia</Card.Title>
                  <Card.Text>
                    Diagnóstico e tratamento de doenças do coração e sistema
                    cardiovascular.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Ortopedia</Card.Title>
                  <Card.Text>
                    Tratamento de problemas musculoesqueléticos e lesões
                    esportivas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home; 