import css from "../../styles/AreaForm.module.css";

interface AreaFormProps {
	label: string;
	id: string;
	maxLength?: number;
	placeholder: string;
	type: string;
	step?: number;
	disable: boolean;
	onChange?: (event: any) => void;
	value: any;
}

export default function AreaForm(props: AreaFormProps) {
	return (
		<div className={css.areaForm}>
			<label htmlFor={props.id}>
				{props.label}
			</label>
			<input
				disabled={props.disable}
				type={props.type}
				required
				maxLength={props.maxLength}
				placeholder={props.placeholder}
				id={props.id}
				step={props.step}
				onChange={(event: any) => props.onChange?.(event.target.value)}
				value={props.value}
			/>
		</div>
	)
}