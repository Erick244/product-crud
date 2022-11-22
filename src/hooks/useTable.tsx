import { editIcon, trashIcon } from "../components/view/Icons";
import { ProductType } from "../models/product.model";
import Link from "next/link";

import css from "../styles/Table.module.css";

export default function useTable() {
	function generateTable(products: ProductType[]) {
		const rows = products.map((product: ProductType, i: number) => {
			return (
				<tr className={css.tbodyTr} key={i}>
					<td>{product.id}</td>
					<td>{product.name}</td>
					<td>{`$${product.price}`}</td>
					<td>
						<Link className={css.edit} href={`/products/edit/${product.id}`}>
							<i className="v-middle">{editIcon}</i>
						</Link>
						<Link className={css.delete} href={`/products/delete/${product.id}`}>
							<i className="v-middle">{trashIcon}</i>
						</Link>
					</td>
				</tr>
			)
		})
		return rows;
	}

	return {
		generateTable
	}
}