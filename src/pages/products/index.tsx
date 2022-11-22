import { productsIcon } from "../../components/view/Icons";
import useProduct from "../../hooks/useProduct";
import Button from "../../components/Button";
import Form from "../../components/form/Form";
import Table from "../../components/Table";
import Layout from "../../components/view/Layout";

import css from "../../styles/Product.module.css";

export default function Products() {
	const { viseble, setVisible, allProducts } = useProduct();

	return (
		<Layout icon={productsIcon} title="Products">
			{viseble === "table" ? (
				<div className={css.container}>
					<Button label="New Product"
						click={() => setVisible("form")}
					/>
					<div className={css.containerTable}>
						<Table products={allProducts}/>
					</div>
				</div>
			) : (
				<div>
					<Form
						title="Add Product"
						disable={false}
						bgButton="#0073d8"
						buttonLabel="Add"
						visible={setVisible}
						formMode="create"
					/>
				</div>
			)}
		</Layout>
	)
}
