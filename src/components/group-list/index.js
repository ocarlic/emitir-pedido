import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  clientName,
  quantily,
  itemProduct,
  valuePrice,
  rentabilidadeNivel,
  valueTotal
}) => (
  <div className="list-group ">
    <div className="list-group-item list-group-item-action active">
      <h5 className="mb-0">Pedido</h5>
    </div>
    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-3">
          {itemProduct.length ? itemProduct[0].name : "Produto"}
        </h5>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">Quantidade: </h6>
        <h6 className="text-dark">{quantily}</h6>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">Cliente: </h6>
        <h6 className="text-dark">{clientName}</h6>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">Total: </h6>
        <h6 className="text-success">
          {valueTotal === "0,00"
            ? `R$ ${valuePrice}`
            : valueTotal === ""
            ? `${valueTotal}`
            : `R$ ${valueTotal}`}
        </h6>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">Rentabilidade: </h6>
        <h6
          className={
            rentabilidadeNivel === "Ruim" ? "text-danger" : "text-success"
          }
        >
          {rentabilidadeNivel}
        </h6>
      </div>
      {clientName && rentabilidadeNivel !== "Ruim" && (
        <small className="text-muted">O pedido está em andamento.</small>
      )}
      {rentabilidadeNivel === "Ruim" && (
        <small className="text-muted">
          Rentabilidade ruim, você não pode finalizar assim! Altere o preço do
          produto
        </small>
      )}
    </div>
  </div>
);

GroupList.defaultProps = {
  clientName: "",
  quantily: "",
  valuePrice: "",
  itemProduct: "",
  rentabilidadeNivel: "",
  valueTotal: ""
};

GroupList.propTypes = {
  clientName: PropTypes.string,
  quantily: PropTypes.string,
  valuePrice: PropTypes.string,
  itemProduct: PropTypes.arrayOf(PropTypes.object),
  rentabilidadeNivel: PropTypes.string,
  valueTotal: PropTypes.string
};

export default GroupList;
