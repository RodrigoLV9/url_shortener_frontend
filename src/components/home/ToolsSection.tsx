import { BarChart3, Lock, Tag } from "lucide-react";

const tools = [
	{
		title: "Estadisticas en Tiempo Real",
		description: "Visualiza clicks, paises de origen y fuentes de trafico en un dashboard intuitivo.",
		icon: BarChart3,
		color: "bg-[#0ea5e9] shadow-[#0ea5e9]/30",
	},
	{
		title: "Alias Personalizados",
		description: "Crea enlaces memorables y profesionales como snap.link/mi-promo para tus campanas.",
		icon: Tag,
		color: "bg-[#8b5cf6] shadow-[#8b5cf6]/30",
	},
	{
		title: "Links Protegidos",
		description: "Anade contrasenas, fechas de expiracion y limites de clicks para mayor seguridad.",
		icon: Lock,
		color: "bg-[#14b8a6] shadow-[#14b8a6]/30",
	},
] as const;

export default function ToolsSection() {
	return (
		<section className="mt-20 text-center">
			<h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
				Mas que un simple enlace corto
			</h2>
			<p className="mx-auto mt-3 max-w-3xl text-base text-slate-500 sm:text-xl">
				Herramientas profesionales para gestionar, proteger y analizar tus enlaces
			</p>

			<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
				{tools.map((tool) => {
					const Icon = tool.icon;
					return (
						<article key={tool.title} className="rounded-2xl border border-slate-200 bg-[#f7f7f9] px-6 py-7 text-left">
							<div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md ${tool.color}`}>
								<Icon className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-bold text-slate-800">{tool.title}</h3>
							<p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">{tool.description}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}
