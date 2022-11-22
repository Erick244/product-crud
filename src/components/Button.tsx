import css from "../styles/Button.module.css";

interface ButtonProps {
	label: string;
	bgColor?: string;
	click?: () => void;
}

export default function Button(props: ButtonProps) {
	return (
		<button className={css.button} style={{
			backgroundColor: props.bgColor || '#0073d8'
		}}
		onClick={() => props.click?.()}>
			{props.label}
		</button>
	)
}