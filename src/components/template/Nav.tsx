import { homeIcon, productsIcon } from "../view/Icons";
import Link from "next/link";

import css from "../../styles/Nav.module.css";

export default function Nav() {
	return (
		<div className={css.nav}>
			<Link href={'/'} className={css.item}>
				Home <i className="v-middle">{homeIcon}</i>
			</Link>
			<Link href={'/products'} className={css.item}>
				Products <i className="v-middle">{productsIcon}</i>
			</Link>
		</div>
	)
}