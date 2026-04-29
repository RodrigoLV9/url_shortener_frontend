import { Eye } from "lucide-react";
import { LOGIN_SOCIAL_PROVIDERS } from "../../config/auth";
import FormField from "./FormField";
import SocialButton from "./SocialButton";
import SocialProviderIcon from "./SocialProviderIcon";
export default function RegisterCard() {
	const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get("fullName") ?? "").trim();
		const email = String(formData.get("email") ?? "").trim();
		const password = String(formData.get("password") ?? "");
		const confirmPassword = String(formData.get("confirmPassword") ?? "");

		if (password !== confirmPassword) {
			console.error("Las contrasenas no coinciden");
			return;
		}

		try {
			const response = await fetch("http://localhost:3000/auth/register", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json"
			  },
			  body: JSON.stringify({
				name,
				email,
				password,
			  })
			})
			await response.json();
			if (response.ok) {
			  console.log("Registro exitoso");
			} else {
			  return console.error("Error en el registro");
			}
			} catch (error) {
				console.error("Error en la solicitud:", error);
			}
			}
	return (
		<section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-9">
			<header className="text-center">
				<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Crea tu cuenta gratis</h1>
				<p className="mt-2 text-base text-slate-500 sm:text-lg">Empieza a gestionar y proteger tus enlaces hoy mismo</p>
			</header>

			<div className="mt-7 space-y-3">
				{LOGIN_SOCIAL_PROVIDERS.map((provider) => (
					<SocialButton key={provider.id} label={provider.label} icon={<SocialProviderIcon providerId={provider.id} />} />
				))}
			</div>

			<div className="mt-6 flex items-center gap-3" role="presentation">
				<div className="h-px flex-1 bg-slate-200" />
				<span className="text-sm text-slate-400 sm:text-base">o registrate con email</span>
				<div className="h-px flex-1 bg-slate-200" />
			</div>

			<form className="mt-6 space-y-5" method="post" action="#" onSubmit={handleSubmit}>
				<FormField
					id="fullName"
					name="fullName"
					label="Nombre completo"
					labelNote="(opcional)"
					type="text"
					placeholder="Maria Garcia"
					autoComplete="name"
				/>

				<FormField
					id="email"
					name="email"
					label="Correo electronico"
					type="email"
					placeholder="tu@email.com"
					autoComplete="email"
					required
				/>

				<FormField
					id="password"
					name="password"
					label="Contrasena"
					type="password"
					placeholder="Minimo 8 caracteres"
					autoComplete="new-password"
					required
					rightContent={
						<button type="button" className="rounded-full p-1 text-slate-400 transition hover:text-slate-600" aria-label="Mostrar contrasena">
							<Eye className="h-5 w-5" />
						</button>
					}
				/>

				<FormField
					id="confirmPassword"
					name="confirmPassword"
					label="Confirmar contrasena"
					type="password"
					placeholder="Repite tu contrasena"
					autoComplete="new-password"
					required
					rightContent={
						<button type="button" className="rounded-full p-1 text-slate-400 transition hover:text-slate-600" aria-label="Mostrar confirmacion de contrasena">
							<Eye className="h-5 w-5" />
						</button>
					}
				/>

				<label className="flex items-start gap-3 text-sm text-slate-600 sm:text-base">
					<input
						type="checkbox"
						name="terms"
						required
						className="mt-0.75 h-4 w-4 rounded border-slate-300 text-[#6d4cff] focus:ring-[#6d4cff]/30"
					/>
					<span>
						Acepto los{" "}
						<a href="#" className="font-semibold text-[#6d4cff] transition hover:text-[#5b39f1]">
							Terminos de servicio
						</a>{" "}
						y la{" "}
						<a href="#" className="font-semibold text-[#6d4cff] transition hover:text-[#5b39f1]">
							Politica de privacidad
						</a>
					</span>
				</label>

				<button
					type="submit"
					className="mt-1 h-12 w-full rounded-2xl bg-linear-to-r from-[#7f2bff] to-[#4e46ef] text-base font-semibold text-white shadow-[0_10px_24px_rgba(90,54,255,0.3)] transition hover:opacity-95 sm:h-13 sm:text-lg"
				>
					Crear cuenta -&gt;
				</button>
			</form>
		</section>
	);
}
