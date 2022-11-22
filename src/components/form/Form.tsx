import { ProductType } from "../../models/product.model";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useProduct from "../../hooks/useProduct";
import Button from "../Button";
import AreaForm from "./AreaForm";

import css from "../../styles/Form.module.css";

interface FromProps {
	title: string;
	disable: boolean;
	bgButton: string;
	buttonLabel: string;
	visible?: (visible: "table" | "form") => void;
	formMode: "create" | "delete" | "update";
	productId?: any;
}

export default function Form(props: FromProps) {

	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const route = useRouter();

	const {
		readProduct,
		updateProduct,
		deleteProduct,
		createProduct
	} = useProduct();

	useEffect(() => {
		if (props.productId) {
			readProduct(props.productId)
				.then(req => req.data)
				.then(data => {
					setName(data.name);
					setPrice(data.price);
				})
		}
	}, [])

	return (
		<div className={css.containerForm}>
			<h1 className={css.title}>{props.title}</h1>
			<hr />
			<form className={css.form} onSubmit={(e) => e.preventDefault()}>
				{props.productId ? (
					<AreaForm
						disable={true}
						id="id"
						label="Product ID"
						placeholder="Product id..."
						type="text"
						value={props.productId}
					/>
				) : null}
				<AreaForm
					id="name"
					label="Name"
					placeholder="Product name..."
					type="text"
					maxLength={50}
					disable={props.disable}
					onChange={setName}
					value={name}
				/>
				<AreaForm
					id="price"
					label="Price ($)"
					placeholder="Product price..."
					type="number"
					step={0.5}
					disable={props.disable}
					onChange={setPrice}
					value={price}
				/>
				<div className={css.containerButtons}>
					<Button label={props.buttonLabel} bgColor={props.bgButton}
						click={() => {
							const product: ProductType = { name, price, id: props.productId };
							if (name && price) {
								switch (props.formMode) {
									case "create":
										createProduct(product);
										props.visible?.("table");
										break;
									case "update":
										updateProduct(product);
										break;
									case "delete":
										deleteProduct(product.id);
										break;
								}
								route.push('/products');
							}
						}} />
					<Button label="Cancel" bgColor="#555"
						click={() => {
							props.visible?.("table");
							route.push('/products');
						}}
					/>
				</div>
			</form>
		</div>

	)
}