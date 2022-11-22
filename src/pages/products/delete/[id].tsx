import { productsIcon } from "../../../components/view/Icons";
import { useRouter } from "next/router";
import Form from "../../../components/form/Form";
import Layout from "../../../components/view/Layout";

export default function Delete() {

	const route = useRouter();
	const title = `Products/${route.query?.id}`;

	return (
		<Layout title={title} icon={productsIcon}>
			<Form
				bgButton="crimson"
				buttonLabel="Delete"
				disable={true}
				formMode="delete"
				title="Delete Product"
				productId={route.query?.id}
			/>
		</Layout>
	)
}