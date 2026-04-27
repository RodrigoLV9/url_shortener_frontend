type NotFoundActionsProps = {
	primaryHref?: string;
	contactHref?: string;
};

export default function NotFoundActions({
	primaryHref = "/register",
	contactHref = "/contacto",
}: NotFoundActionsProps) {
	return (
		<div className="mt-8 flex flex-col items-center gap-4">
			<a
				href={primaryHref}
				className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-[#7c3aed] to-[#4f46e5] px-7 text-sm font-bold text-white shadow-[0_16px_28px_-20px_rgba(79,70,229,0.85)] transition hover:opacity-95 sm:text-base"
			>
				Crea tus enlaces con SnapLink
			</a>

			<p className="text-sm text-slate-500">
				¿Este enlace debería existir?{" "}
				<a href={contactHref} className="font-semibold text-violet-600 underline underline-offset-3 transition hover:text-violet-700">
					Contáctanos
				</a>
			</p>
		</div>
	);
}