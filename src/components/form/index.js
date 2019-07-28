import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { clients, products } from '../../api';

class Form extends PureComponent {
  render() {
    const {
      clientName,
      nameChange,
      productName,
      productChange,
      quantity,
      quantityChange,
      priceChange,
      valuePrice,
      itemProduct,
      rentabilidadeNivel,
      handleSubmit,
      resultMultiple,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cliente">
            Cliente
            <select className="form-control" value={clientName} onChange={nameChange} required>
              <option defaultValue />
              {clients.map(client => (
                <option key={client.id}>{client.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="produto">
              Produto
              <select
                className="form-control"
                value={productName}
                onChange={productChange}
                required
              >
                <option defaultValue />
                {products.map(product => (
                  <option value={product.id} key={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="invalid-feedback">Exemplo de feedback invalido para o select</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="preco">
              Preço Unitário (R$)
              <input
                type="text"
                value={valuePrice}
                onChange={priceChange}
                className="form-control"
                id="preco"
                required
              />
            </label>
            <div className="invalid-feedback">Preencha esse campo.</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="multiplo">
              Múltiplo
              <input
                type="text"
                className="form-control"
                id="multiplo"
                placeholder={itemProduct.length ? itemProduct[0].multiple : ''}
                readOnly
              />
            </label>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="quantity">
              Quantidade
              <input
                type="text"
                value={quantity}
                onChange={quantityChange}
                className="form-control"
                required
              />
              <div className="invalid-feedback">Preencha esse campo.</div>
            </label>
          </div>
        </div>
        {!resultMultiple && (
          <div className="alert alert-warning" role="alert">
            {`A quantidade desse produto precisa ser multiplo de ${itemProduct[0].multiple}`}
          </div>
        )}
        {rentabilidadeNivel === 'Ruim' ? (
          <div className="alert alert-danger" role="alert">
            Rentabilidade ruim, você não pode finalizar assim! Altere o preço do produto
          </div>
        ) : (
          <>
            <button type="submit" className="btn btn-primary btn-block">
              Cadastrar
            </button>
          </>
        )}
      </form>
    );
  }
}

Form.defaultProps = {
  clientName: '',
  nameChange: () => {},
  productName: '',
  productChange: () => {},
  quantity: '',
  quantityChange: () => {},
  priceChange: () => {},
  valuePrice: '',
  itemProduct: '',
  rentabilidadeNivel: '',
  handleSubmit: () => {},
  resultMultiple: true,
};

Form.propTypes = {
  clientName: PropTypes.string,
  nameChange: PropTypes.func,
  productName: PropTypes.string,
  productChange: PropTypes.func,
  quantity: PropTypes.string,
  quantityChange: PropTypes.func,
  priceChange: PropTypes.func,
  valuePrice: PropTypes.string,
  itemProduct: PropTypes.arrayOf(PropTypes.object),
  rentabilidadeNivel: PropTypes.string,
  handleSubmit: PropTypes.func,
  resultMultiple: PropTypes.bool,
};

export default Form;
