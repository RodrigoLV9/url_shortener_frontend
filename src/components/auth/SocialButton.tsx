import type { ReactNode } from "react";

type SocialButtonProps = {
	label: string;
	icon: ReactNode;
};

export default function SocialButton({ label, icon }: SocialButtonProps) {
	return (
		<button
			type="button"
			className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 sm:text-base"
		>
			{icon}
			<span>{label}</span>
		</button>
	);
}
