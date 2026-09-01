import { useState } from "react";

export default function ForgotPasswordCard() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = String(formData.get("email") ?? "").trim();

		if (!email) {
			return;
		}

		setSubmitted(true);
		event.currentTarget.reset();
	};

	return (
		<section className="mx-auto w-full max-w-xl rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-9">
			<header className="text-center">
				<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-[2.5rem]">Recuperar Contraseña</h1>
				<p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
					Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu acceso.
				</p>
			</header>

			<form className="mt-7 space-y-5" method="post" action="#" onSubmit={handleSubmit} noValidate>
				<div className="space-y-2">
					<label htmlFor="email" className="block text-sm font-semibold text-slate-700 sm:text-base">
						Correo Electrónico
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="tu@email.com"
						autoComplete="email"
						required
						className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#6d4cff] focus:ring-2 focus:ring-[#6d4cff]/20 sm:text-base"
					/>
				</div>

				<button
					type="submit"
					className="h-12 w-full rounded-2xl bg-gradient-to-r from-[#7f2bff] to-[#4e46ef] text-base font-semibold text-white shadow-[0_10px_24px_rgba(90,54,255,0.3)] transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d4cff] focus-visible:ring-offset-2 sm:h-13 sm:text-lg"
				>
					Enviar enlace de recuperación
				</button>
			</form>

			{submitted ? (
				<p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700" role="status" aria-live="polite">
					Si existe una cuenta asociada a ese correo, recibirás un enlace de recuperación en breve.
				</p>
			) : null}
		</section>
	);
}
