import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Bem-vindo ao Hospital Sabará',
      text: 'Oferecendo cuidados de saúde excepcionais para você e sua família. Nossa equipe de profissionais altamente qualificados está pronta para atender todas as suas necessidades médicas.'
    },
    {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Excelência em Saúde',
      text: 'Com tecnologia de ponta e profissionais especializados, garantimos o melhor atendimento para você e sua família.'
    },
    {
      image: 'https://images.unsplash.com/photo-1587351020428-6d4a9e0a6e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Cuidado Integral',
      text: 'Do diagnóstico ao tratamento, oferecemos um cuidado completo e personalizado para cada paciente.'
    },
    {
      image: 'https://images.unsplash.com/photo-1587351020428-6d4a9e0a6e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Estrutura Moderna',
      text: 'Nossas instalações são equipadas com a mais avançada tecnologia médica para seu conforto e segurança.'
    },
    {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Atendimento Humanizado',
      text: 'Priorizamos o bem-estar e o conforto dos nossos pacientes em todos os momentos.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Compromisso com a Saúde',
      text: 'Nosso compromisso é com a sua saúde e qualidade de vida, oferecendo os melhores tratamentos disponíveis.'
    }
  ];

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      controls={true}
      indicators={false}
      interval={5000}
      className="hero-carousel"
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div 
            className="carousel-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh'
            }}
          >
            <Container className="h-100">
              <Row className="h-100 align-items-center">
                <Col lg={8}>
                  <h1 className="display-4 fw-bold mb-4 text-white">
                    {slide.title}
                  </h1>
                  <p className="lead mb-4 text-white">
                    {slide.text}
                  </p>
                  <Button onClick={() => navigate('/login')} variant="primary" size="lg">
                    Agende uma Consulta
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel; 