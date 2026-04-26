import type { ReactNode } from "react";

type FormFieldProps = {
	id: string;
	name: string;
	label?: string;
	labelNote?: string;
	type?: "text" | "email" | "password";
	placeholder?: string;
	autoComplete?: string;
	required?: boolean;
	rightContent?: ReactNode;
};

export default function FormField({
	id,
	name,
	label,
	labelNote,
	type = "text",
	placeholder,
	autoComplete,
	required,
	rightContent,
}: FormFieldProps) {
	return (
		<div className="space-y-2">
			{label ? (
				<label htmlFor={id} className="block text-sm font-semibold text-slate-700 sm:text-base">
					{label}
					{labelNote ? <span className="ml-1 text-slate-400">{labelNote}</span> : null}
				</label>
			) : null}
			<div className="relative">
				<input
					id={id}
					name={name}
					type={type}
					placeholder={placeholder}
					autoComplete={autoComplete}
					required={required}
					className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#6d4cff] focus:ring-2 focus:ring-[#6d4cff]/20 sm:text-base"
				/>
				{rightContent ? <div className="absolute inset-y-0 right-4 flex items-center">{rightContent}</div> : null}
			</div>
		</div>
	);
}
