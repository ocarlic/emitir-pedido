import React from 'react';

function handleBackPage() {
  return window.history.back();
}

const SucessForm = () => (
  <div className="sucessForm">
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">O seu pedido foi emitido com sucesso</h1>
        <p className="lead">Alguém da nossa equipe entrará em contato com você em breve</p>
        <hr className="my-4" />
        <p>Enquanto isso você pode emitir quantos pedidos que quiser!</p>
        <div
          className="btn btn-primary btn-lg"
          role="button"
          onKeyPress={handleBackPage}
          onClick={handleBackPage}
          tabIndex="0"
        >
          Emitir mais
        </div>
      </div>
    </div>
  </div>
);

export default SucessForm;
