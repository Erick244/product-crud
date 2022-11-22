import { useState, useEffect } from "react";
import { ProductType } from "../models/product.model";
import axios from "axios";

export default function useProduct() {
	const baseUrl = 'http://localhost:3001/products';

	const [viseble, setVisible] = useState<"table" | "form">("table");
	const [allProducts, setAllProducts] = useState<ProductType[]>([]);

	async function getAllProducts() {
		const resp = await axios.get(baseUrl);
		const data = await resp.data;
		setAllProducts(data);
	}

	function createProduct(product: ProductType) {
		axios.post(baseUrl, product);
	}

	function readProduct(id: any) {
		const url = `${baseUrl}/${id}`;
		return axios.get(url);
	}

	function updateProduct(product: ProductType) {
		const url = `${baseUrl}/${product.id}`;
		axios.put(url, product);
	}

	function deleteProduct(id: any) {
		const url = `${baseUrl}/${id}`;
		axios.delete(url);
	}

	useEffect(() => {
		getAllProducts();
	}, [viseble])
	
	return {
		viseble,
		setVisible,
		allProducts,
		readProduct,
		updateProduct,
		deleteProduct,
		createProduct,
		getAllProducts
	}
}