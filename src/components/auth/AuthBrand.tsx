import { Link2 } from "lucide-react";

export default function AuthBrand() {
	return (
		<a href="/" className="inline-flex items-center gap-3" aria-label="Ir al inicio de SnapLink">
			<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white shadow-sm">
				<Link2 className="h-4 w-4" />
			</div>
			<span className="text-3xl font-extrabold tracking-tight text-slate-800">SnapLink</span>
		</a>
	);
}
