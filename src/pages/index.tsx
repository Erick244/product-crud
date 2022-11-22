import Head from "next/head";
import { crudIcon, homeIcon } from "../components/view/Icons";
import Layout from "../components/view/Layout";

import css from "../styles/Home.module.css";

export default function Home() {
	return (
		<Layout icon={homeIcon} title="Home">
			<div className={css.home}>
				<h1 className={css.title}>
					Welcome to Product Crud <i className="v-middle">{crudIcon}</i>
				</h1>
				<hr />
				<p className={css.description}>
					This is an academic project to simulate a product store system.
				</p>
			</div>
		</Layout>
	)
}
