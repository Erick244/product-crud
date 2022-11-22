import Link from "next/link";

import css from "../../styles/Header.module.css";

interface HeaderProps {
	title: string;
	icon: any;
}

export default function Header(props: HeaderProps) {	
	return (
		<header className={css.header}>
			<div className={css.logo}>
				<Link href="/">CR<strong>U</strong>D</Link>
			</div>
			<div className={css.title}>
				{props.title} <i className="v-middle">{props.icon}</i>
			</div>
		</header>
	)
}