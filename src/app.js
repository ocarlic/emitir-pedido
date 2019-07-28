import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Mask } from "./mask";
import { products } from "./api";
import GroupList from "./components/group-list";
import Form from "./components/form";
import { nivelRentabilidade, quantilyMultiple } from "./services";

class App extends PureComponent {
	state = {
		clientName: "",
		productName: "",
		quantity: "",
		valuePrice: "",
		itemProduct: [],
		rentabilidadeNivel: "",
		valueTotal: "",
		multiple: "",
		resultMultiple: true
	};

	componentDidUpdate(state) {
		const { valuePrice, itemProduct, quantity } = this.state;
		if (valuePrice !== state.valuePrice && itemProduct.length) {
			this.rentabilidadeChange();
		}
		if (quantity !== "" || valuePrice !== "") this.calculateTotal(+quantity);
	}

	rentabilidadeChange = () => {
		const { valuePrice, itemProduct } = this.state;
		const nivel = nivelRentabilidade(
			itemProduct[0].price,
			Number(Mask.toNumber(valuePrice))
		);
		this.setState({
			rentabilidadeNivel: nivel
		});
	};

	nameChange = e => {
		this.setState({ clientName: e.target.value });
	};

	productChange = e => {
		const item = products.filter(
			product => product.id.indexOf(e.target.value) !== -1
		);
		this.setState(
			{
				productName: e.target.value,
				itemProduct: item
			},
			() => {
				this.setState({
					valuePrice: Mask.toMoney(item[0].price),
					multiple: item[0].multiple
				});
			}
		);
	};

	quantityChange = e => {
		const quantily = e.target.value;
		if (quantily > 0) this.setState({ quantity: e.target.value });
		else if (quantily.length === 0) this.setState({ quantity: "" });
	};

	priceChange = e => {
		this.setState({
			valuePrice: (e.target.value = Mask.toMoney(e.target.value))
		});
	};

	calculateTotal = quantity => {
		const { valuePrice } = this.state;
		this.setState({
			valueTotal: Mask.toMoney(quantity * Number(Mask.toNumber(valuePrice)))
		});
	};

	calcularSomenteMultiplo = () => {
		const { multiple, quantity } = this.state;
		const { history } = this.props;
		const result = quantilyMultiple(+quantity, multiple);
		this.setState({ resultMultiple: result });
		if (result) history.push("/sucess");
	};

	handleSubmit = e => {
		e.preventDefault();
		this.calcularSomenteMultiplo();
	};

	render() {
		const {
			clientName,
			productName,
			quantity,
			valuePrice,
			itemProduct,
			rentabilidadeNivel,
			valueTotal
		} = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 order-md-2 mb-4">
						<GroupList
							clientName={clientName}
							productName={productName}
							quantily={quantity}
							itemProduct={itemProduct}
							valuePrice={valuePrice}
							rentabilidadeNivel={rentabilidadeNivel}
							valueTotal={valueTotal}
						/>
					</div>
					<div className="col-md-8 order-md-1">
						<h2>Emissão de pedidos</h2>
						<Form
							nameChange={e => this.nameChange(e)}
							productChange={e => this.productChange(e)}
							quantityChange={e => this.quantityChange(e)}
							priceChange={e => this.priceChange(e)}
							handleSubmit={e => this.handleSubmit(e)}
							{...this.state}
						/>
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default App;
