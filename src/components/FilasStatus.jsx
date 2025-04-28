import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Badge, Container } from 'react-bootstrap';

const FilasStatus = () => {
  const [filas, setFilas] = useState([
    { id: 1, nome: 'Pediatria', pessoas: 0, ultimaAtualizacao: new Date() },
    { id: 2, nome: 'Clínica Geral', pessoas: 0, ultimaAtualizacao: new Date() },
    { id: 3, nome: 'Ortopedia', pessoas: 0, ultimaAtualizacao: new Date() },
    { id: 4, nome: 'Cardiologia', pessoas: 0, ultimaAtualizacao: new Date() },
    { id: 5, nome: 'Oftalmologia', pessoas: 0, ultimaAtualizacao: new Date() },
    { id: 6, nome: 'Dermatologia', pessoas: 0, ultimaAtualizacao: new Date() }
  ]);

  const [tempoRestante, setTempoRestante] = useState(30 * 60); // 30 minutos em segundos

  const atualizarFilas = () => {
    const novasFilas = filas.map(fila => ({
      ...fila,
      pessoas: Math.floor(Math.random() * 20), // Número aleatório entre 0 e 20
      ultimaAtualizacao: new Date()
    }));
    setFilas(novasFilas);
    setTempoRestante(30 * 60); // Reset para 30 minutos
  };

  useEffect(() => {
    // Atualiza imediatamente
    atualizarFilas();
    
    // Configura o intervalo de 30 minutos para atualizar as filas
    const intervaloFilas = setInterval(atualizarFilas, 30 * 60 * 1000);
    
    // Configura o intervalo de 1 segundo para atualizar o contador
    const intervaloContador = setInterval(() => {
      setTempoRestante(prev => {
        if (prev <= 1) {
          return 30 * 60;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Limpa os intervalos quando o componente é desmontado
    return () => {
      clearInterval(intervaloFilas);
      clearInterval(intervaloContador);
    };
  }, []);

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
  };

  return (
    <div className="filas-status py-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Status das Filas</h2>
          <Badge bg="primary" className="fs-6">
            Próxima atualização em: {formatarTempo(tempoRestante)}
          </Badge>
        </div>
        <Row className="g-3">
          {filas.map(fila => (
            <Col key={fila.id} md={4} lg={2}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5 className="card-title">{fila.nome}</h5>
                  <div className="display-4 mb-3">{fila.pessoas}</div>
                  <p className="text-muted mb-0">pessoas na fila</p>
                  <small className="text-muted">
                    Atualizado: {fila.ultimaAtualizacao.toLocaleTimeString()}
                  </small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FilasStatus; 