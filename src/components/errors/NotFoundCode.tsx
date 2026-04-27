import { Link2 } from "lucide-react";

export default function NotFoundCode() {
	return (
		<div className="relative mx-auto mt-8 w-fit">
			<div className="grid place-items-center">
				<p className="col-start-1 row-start-1 select-none bg-linear-to-b from-violet-500 via-violet-300 to-white bg-clip-text text-[clamp(6rem,22vw,13rem)] leading-none font-black tracking-[-0.06em] text-transparent">
					404
				</p>

				<div className="col-start-1 row-start-1 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100/90 bg-white text-violet-500 shadow-[0_28px_60px_-18px_rgba(79,70,229,0.65),0_10px_24px_-12px_rgba(124,58,237,0.75)] sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16 md:rounded-3xl">
					<Link2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
				</div>
			</div>
		</div>
	);
}