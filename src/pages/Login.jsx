import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const usuarioCorreto = 'admin';
  const senhaCorreta = '1234';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      setErro('');
      navigate('/consultas'); // Redireciona para Consultas.jsx
    } else {
      setErro('Usuário ou senha incorretos!');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card shadow" style={{ minWidth: 350, maxWidth: 400, padding: '2rem', background: 'rgba(255,255,255,0.97)' }}>
        <div className="text-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=120&q=80&facepad=2"
            alt="Logo do Hospital"
            style={{ width: 80, marginBottom: 16, borderRadius: '50%' }}
          />
          <h3 className="mb-3">Login</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Usuário"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          {erro && <div className="alert alert-danger py-1">{erro}</div>}
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="text-primary" style={{ fontSize: '0.95rem' }}>
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;