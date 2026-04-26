import { Link2 } from "lucide-react";
import { MAIN_NAV } from "../../config/site";

export default function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<a href="/" className="flex items-center gap-2" aria-label="Ir al inicio de SnapLink">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white">
						<Link2 className="h-4 w-4" />
					</div>
					<span className="text-2xl font-extrabold tracking-tight text-slate-800">SnapLink</span>
				</a>

				<nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
					{MAIN_NAV.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-base font-semibold text-slate-500 transition hover:text-slate-800"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<a
						href="/login"
						className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:text-base"
					>
						Iniciar Sesion
					</a>
					<button className="rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:text-base">
						Registrarse
					</button>
				</div>
			</div>
		</header>
	);
}
