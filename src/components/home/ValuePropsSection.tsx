import { Shield, TrendingUp, Zap } from "lucide-react";

const cards = [
	{
		title: "Velocidad Extrema",
		description: "Redireccionamiento instantaneo con infraestructura global",
		icon: Zap,
	},
	{
		title: "100% Seguro",
		description: "Proteccion anti-spam y deteccion de malware integrada",
		icon: Shield,
	},
	{
		title: "Analytics Avanzados",
		description: "Metricas detalladas para optimizar tus campanas",
		icon: TrendingUp,
	},
] as const;

export default function ValuePropsSection() {
	return (
		<section className="mt-14 grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-6">
			{cards.map((card) => {
				const Icon = card.icon;
				return (
					<article key={card.title} className="mx-auto max-w-xs">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ede9fe] text-[#7c3aed]">
							<Icon className="h-5 w-5" />
						</div>
						<h3 className="text-3xl font-bold text-slate-800">{card.title}</h3>
						<p className="mt-2 text-base text-slate-500">{card.description}</p>
					</article>
				);
			})}
		</section>
	);
}
