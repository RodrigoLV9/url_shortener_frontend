import { Globe, Link2, Rss, Send } from "lucide-react";
import { FOOTER_GROUPS } from "../../config/site";

export default function SiteFooter() {
	return (
		<footer className="bg-[#f3f4f6] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-10 md:grid-cols-4 md:gap-8">
					<div>
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white">
								<Link2 className="h-4 w-4" />
							</div>
							<span className="text-2xl font-extrabold tracking-tight text-slate-800">SnapLink</span>
						</div>
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 sm:text-base">
							La plataforma moderna para acortar, proteger y gestionar enlaces.
						</p>
					</div>

					{FOOTER_GROUPS.map((group) => (
						<div key={group.title}>
							<h4 className="text-base font-extrabold uppercase tracking-wide text-slate-700">{group.title}</h4>
							<ul className="mt-4 space-y-3 text-sm text-slate-500 sm:text-base">
								{group.links.map((link) => (
									<li key={link.label}>
										<a href={link.href} className="hover:text-slate-700">
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
					<p>@ 2026 SnapLink. Todos los derechos reservados.</p>
					<div className="flex items-center gap-5 text-slate-500">
						<a href="#" className="transition hover:text-slate-700" aria-label="Canal">
							<Send className="h-4 w-4" />
						</a>
						<a href="#" className="transition hover:text-slate-700" aria-label="Blog RSS">
							<Rss className="h-4 w-4" />
						</a>
						<a href="#" className="transition hover:text-slate-700" aria-label="Sitio Web">
							<Globe className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
