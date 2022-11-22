import { ProductType } from "../models/product.model";
import useTable from "../hooks/useTable";

import css from "../styles/Table.module.css";

interface TableProps {
	products: ProductType[];
}

export default function Table(props: TableProps) {
	
	const {generateTable} = useTable();

	return (
		<table className={css.table}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Price</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{generateTable(props.products)}
			</tbody>
		</table>
	)
}