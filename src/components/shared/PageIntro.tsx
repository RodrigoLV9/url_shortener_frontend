type PageIntroProps = {
	title: string;
	description: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
	return (
		<section className="mx-auto w-full max-w-4xl text-center">
			<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
			<p className="mx-auto mt-4 max-w-3xl text-base text-slate-500 sm:text-xl">{description}</p>
		</section>
	);
}
