import { githubIcon } from "../view/Icons";

import css from "../../styles/Footer.module.css";

export default function Footer() {
	return (
		<footer className={css.footer}>
			<a href="https://github.com/Erick244" target="_blank">
				Developed by @Erick<strong>244</strong> on Github <i className="v-middle">{githubIcon}</i>
			</a>
		</footer>
	)
}