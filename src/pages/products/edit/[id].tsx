import { useRouter } from "next/router";
import { productsIcon } from "../../../components/view/Icons";
import Form from "../../../components/form/Form";
import Layout from "../../../components/view/Layout";

export default function Edit() {

	const route = useRouter();
	const title = `Products/${route.query?.id}`;

	return (
		<Layout title={title} icon={productsIcon}>
			<Form
				bgButton="#e2d518"
				buttonLabel="Edit"
				disable={false}
				formMode="update"
				title="Edit Product"
				productId={route.query?.id}
			/>
		</Layout>
	)
}