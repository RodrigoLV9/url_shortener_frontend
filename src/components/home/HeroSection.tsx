import { Link2 } from "lucide-react";

export default function HeroSection() {
	return (
		<section className="text-center">
			<h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
				Acorta tus enlaces.
				<br />
				<span className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] bg-clip-text text-transparent">
					Expande tu alcance.
				</span>
			</h1>

			<p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-500 sm:text-2xl">
				La plataforma moderna para crear, gestionar y rastrear enlaces cortos inteligentes en segundos.
			</p>

			<div className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-[0_14px_40px_-24px_rgba(109,40,217,0.45)] sm:px-6">
				<div className="flex flex-col gap-3 sm:flex-row">
					<div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-slate-400">
						<Link2 className="h-5 w-5" />
						<span className="truncate text-sm font-medium sm:text-base">
							Pega tu URL larga aqui (ej. https://ejemplo.com/pagina-muy-larga)
						</span>
					</div>
					<button className="h-12 rounded-xl bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] px-6 text-sm font-bold text-white transition hover:opacity-95 sm:px-8 sm:text-base">
						Acortar Gratis
					</button>
				</div>

				<p className="mt-4 text-sm font-medium text-slate-400">
					No requiere registro • Links ilimitados • Totalmente gratis
				</p>
			</div>
		</section>
	);
}
