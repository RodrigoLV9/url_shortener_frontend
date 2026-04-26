export type SocialProvider = {
	id: string;
	label: string;
};

export const LOGIN_SOCIAL_PROVIDERS: SocialProvider[] = [
	{ id: "google", label: "Continuar con Google" },
	{ id: "github", label: "Continuar con GitHub" },
];
