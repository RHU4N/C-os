import React from 'react';
import '../Style.css';

const Login = () => (
  <main>
    <div className="card-poke">
      <div className="container-fluid py-5">
        <h3> login: </h3>
        <div className="card-poke">
          <form>
            <label htmlFor="nome">Nome de Usuário: </label>
            <input type="text" id="nome" name="nome" placeholder="Digite o nome de usuário" className="form-control" />
            <br />
            <label htmlFor="senha">Senha: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite a senha" className="form-control" />
            <br />
            <button type="submit" className="btn-add">Login</button>
          </form>
        </div>
      </div>
    </div>
  </main>
);

export default Login;
