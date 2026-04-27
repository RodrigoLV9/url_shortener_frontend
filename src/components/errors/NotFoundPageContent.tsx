import AuthBrand from "../auth/AuthBrand";
import NotFoundActions from "./NotFoundActions";
import NotFoundCode from "./NotFoundCode";

export default function NotFoundPageContent() {
	return (
		<section className="relative isolate min-h-screen overflow-hidden px-4 py-10 sm:px-6 sm:py-14">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-[140%] rounded-full bg-violet-200/35 blur-3xl" />
				<div className="absolute -bottom-20 left-1/2 h-80 w-80 translate-x-[40%] rounded-full bg-indigo-200/30 blur-3xl" />
			</div>

			<div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
				<AuthBrand />

				<NotFoundCode />

				<h1 className="mt-8 max-w-xl text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-[2.25rem]">
					Ups, este enlace se perdió en el ciberespacio
				</h1>

				<p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-slate-500">
					El enlace que intentas abrir no existe, pudo haber caducado o fue desactivado por su propietario.
				</p>

				<NotFoundActions />
			</div>
		</section>
	);
}