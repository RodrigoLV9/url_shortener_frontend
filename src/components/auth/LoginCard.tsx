import { Eye } from "lucide-react";
import { LOGIN_SOCIAL_PROVIDERS } from "../../config/auth";
import FormField from "./FormField";
import SocialButton from "./SocialButton";

function GoogleIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path
				fill="#EA4335"
				d="M12 10.2v3.9h5.4c-.2 1.3-1.5 3.8-5.4 3.8-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.5 3.3 14.5 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.2-.2-1.7H12Z"
			/>
			<path fill="#FBBC05" d="M3.6 7.6 6.8 10c.9-2.5 2.9-4.1 5.2-4.1 1.8 0 3 .8 3.7 1.5l2.5-2.4C16.5 3.3 14.5 2.5 12 2.5 8.1 2.5 4.8 4.7 3.6 7.6Z" />
			<path fill="#34A853" d="M12 21.5c2.5 0 4.6-.8 6.2-2.3l-3-2.4c-.8.6-1.9 1-3.2 1-3.8 0-5.1-2.5-5.4-3.8l-3.2 2.4c1.2 2.9 4.4 5.1 8.6 5.1Z" />
			<path fill="#4285F4" d="M21.1 12.2c0-.6-.1-1.2-.2-1.7H12v3.9h5.4c-.2 1.1-.9 2-2 2.7l3 2.4c1.8-1.7 2.7-4.2 2.7-7.3Z" />
		</svg>
	);
}

function SocialIcon({ providerId }: { providerId: string }) {
	if (providerId === "google") {
		return <GoogleIcon />;
	}

	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-600" aria-hidden="true">
			<path
				fill="currentColor"
				d="M12 .5C5.6.5.5 5.7.5 12.2c0 5.2 3.3 9.7 8 11.2.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2 1-.3 2-.5 3-.5s2 .2 3 .5c2.3-1.6 3.4-1.2 3.4-1.2.7 1.6.3 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.6 8-6 8-11.2C23.5 5.7 18.4.5 12 .5Z"
			/>
		</svg>
	);
}

export default function LoginCard() {
	return (
		<section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-9">
			<header className="text-center">
				<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Bienvenido de nuevo</h1>
				<p className="mt-2 text-base text-slate-500 sm:text-lg">Ingresa a tu panel de SnapLink</p>
			</header>

			<div className="mt-7 space-y-3">
				{LOGIN_SOCIAL_PROVIDERS.map((provider) => (
					<SocialButton key={provider.id} label={provider.label} icon={<SocialIcon providerId={provider.id} />} />
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
					className="mt-1 h-12 w-full rounded-2xl bg-gradient-to-r from-[#7f2bff] to-[#4e46ef] text-base font-semibold text-white shadow-[0_10px_24px_rgba(90,54,255,0.3)] transition hover:opacity-95 sm:h-13 sm:text-lg"
				>
					Iniciar Sesion -&gt;
				</button>
			</form>
		</section>
	);
}
