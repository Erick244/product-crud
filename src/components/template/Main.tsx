import css from "../../styles/Main.module.css";

interface MainProps {
	children: any;
}

export default function Main(props: MainProps) {
	return (
		<main className={css.main}>
			{props.children}
		</main>
	)
}