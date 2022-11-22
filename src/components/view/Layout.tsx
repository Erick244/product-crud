import Footer from "../template/Footer";
import Header from "../template/Header";
import Main from "../template/Main";
import Nav from "../template/Nav";
import css from "../../styles/Layout.module.css";

interface LayuoutProps {
	title: string;
	icon: any;
	children: any;
}

export default function Layout(props: LayuoutProps) {
	return (
		<div className={css.layout}>
			<Header title={props.title} icon={props.icon}/>
			<Nav />
			<Main>
				{props.children}
			</Main>
			<Footer />
		</div>
	)
}