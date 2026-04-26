import { Eye } from "lucide-react";
import { LOGIN_SOCIAL_PROVIDERS } from "../../config/auth";
import FormField from "./FormField";
import SocialButton from "./SocialButton";
import SocialProviderIcon from "./SocialProviderIcon";

export default function LoginCard() {
	return (
		<section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-9">
			<header className="text-center">
				<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Bienvenido de nuevo</h1>
				<p className="mt-2 text-base text-slate-500 sm:text-lg">Ingresa a tu panel de SnapLink</p>
			</header>

			<div className="mt-7 space-y-3">
				{LOGIN_SOCIAL_PROVIDERS.map((provider) => (
					<SocialButton key={provider.id} label={provider.label} icon={<SocialProviderIcon providerId={provider.id} />} />
				))}
			</div>

			<div className="mt-6 flex items-center gap-3" role="presentation">
				<div className="h-px flex-1 bg-slate-200" />
				<span className="text-sm text-slate-400 sm:text-base">o iniciar sesion con email</span>
				<div className="h-px flex-1 bg-slate-200" />
			</div>

			<form className="mt-6 space-y-5" method="post" action="#">
				<FormField
					id="email"
					name="email"
					label="Correo Electronico"
					type="email"
					placeholder="tu@email.com"
					autoComplete="email"
				/>

				<div className="space-y-2">
					<div className="flex items-center justify-between gap-4">
						<label htmlFor="password" className="text-sm font-semibold text-slate-700 sm:text-base">
							Contrasena
						</label>
						<a href="#" className="text-xs font-semibold text-[#6d4cff] transition hover:text-[#5b39f1] sm:text-sm">
							Olvidaste tu contrasena?
						</a>
					</div>

					<FormField
						id="password"
						name="password"
						type="password"
						label=""
						placeholder="********"
						autoComplete="current-password"
						rightContent={
							<button
								type="button"
								className="rounded-full p-1 text-slate-400 transition hover:text-slate-600"
								aria-label="Mostrar contrasena"
							>
								<Eye className="h-5 w-5" />
							</button>
						}
					/>
				</div>

				<button
					type="submit"
					className="mt-1 h-12 w-full rounded-2xl bg-linear-to-r from-[#7f2bff] to-[#4e46ef] text-base font-semibold text-white shadow-[0_10px_24px_rgba(90,54,255,0.3)] transition hover:opacity-95 sm:h-13 sm:text-lg"
				>
					Iniciar Sesion -&gt;
				</button>
			</form>
		</section>
	);
}
