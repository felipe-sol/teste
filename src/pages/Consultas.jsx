
import React, { useState } from 'react';

    function Consultas() {
      const [form, setForm] = useState({
        nome: '',
        especialidade: '',
        data: '',
        hora: '',
      });
      const [mensagem, setMensagem] = useState('');
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setMensagem('Consulta agendada com sucesso!');
        setForm({
          nome: '',
          especialidade: '',
          data: '',
          hora: '',
        });
      };
    
      return (
        <div className="container py-5" style={{ maxWidth: 500 }}>
          <h2 className="mb-4 text-center">Agendar Consulta</h2>
          <form onSubmit={handleSubmit} className="card p-4 shadow">
            <div className="mb-3">
              <label className="form-label">Nome do Paciente</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Especialidade</label>
              <select
                className="form-select"
                name="especialidade"
                value={form.especialidade}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Ortopedia">Ortopedia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Clínica Geral">Clínica Geral</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Data</label>
              <input
                type="date"
                className="form-control"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Hora</label>
              <input
                type="time"
                className="form-control"
                name="hora"
                value={form.hora}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Agendar Consulta
            </button>
            {mensagem && (
              <div className="alert alert-success mt-3 text-center">{mensagem}</div>
            )}
          </form>
        </div>
      );
    }
    

export default Consultas;