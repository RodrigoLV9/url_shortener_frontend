export type NavItem = {
	label: string;
	href: string;
};

export type FooterGroup = {
	title: string;
	links: NavItem[];
};

export const FOOTER_GROUPS: FooterGroup[] = [
	{
		title: "Producto",
		links: [
			{ label: "Caracteristicas", href: "/caracteristicas" },
			{ label: "Precios", href: "/precios" },
			{ label: "API", href: "#" },
			{ label: "Integraciones", href: "#" },
		],
	},
	{
		title: "Empresa",
		links: [
			{ label: "Acerca de", href: "#" },
			{ label: "Blog", href: "#" },
			{ label: "Carreras", href: "#" },
			{ label: "Contacto", href: "/contacto" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacidad", href: "#" },
			{ label: "Terminos", href: "#" },
			{ label: "Seguridad", href: "#" },
			{ label: "Cookies", href: "#" },
		],
	},
];
