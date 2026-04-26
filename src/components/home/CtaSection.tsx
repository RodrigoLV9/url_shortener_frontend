import { ArrowRight } from "lucide-react";

export default function CtaSection() {
	return (
		<section className="mt-20 rounded-3xl bg-gradient-to-r from-[#6d28d9] via-[#4f46e5] to-[#a21caf] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
					Listo para tomar el control de tus enlaces?
				</h2>
				<p className="mx-auto mt-5 max-w-3xl text-lg text-white/80 sm:text-2xl">
					Unete a miles de usuarios que confian en SnapLink para gestionar sus URLs
				</p>

				<button className="mx-auto mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-10 text-lg font-bold text-[#6d28d9] transition hover:bg-white/90">
					Crear Cuenta Gratuita
					<ArrowRight className="h-5 w-5" />
				</button>

				<p className="mt-6 text-base text-white/60">Sin tarjeta de credito • Configuracion en 30 segundos</p>
			</div>
		</section>
	);
}
