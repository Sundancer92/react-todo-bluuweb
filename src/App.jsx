import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

export const App = () => {
	return (
		<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
			<header className="container mx-auto px-4 pt-8">
				<div className="flex justify-between ">
					<h1 className="uppercase text-white text-2xl font-bold tracking-[0.3em]">
						Todo
					</h1>
					<button>
						<MoonIcon />
					</button>
				</div>
				<form
					className="bg-white rounded-md overflow-hidden py-3 gap-4 items-center flex px-4 mt-8"
					action=""
				>
					<span className="rounded-full border-2 inline-block w-5 h-5"></span>
					<input
						className="w-full text-gray-400 outline-none"
						type="text"
						placeholder="Create a new todo..."
					/>
				</form>
			</header>
			<main className="container mx-auto px-4 mt-4">
				<div className="bg-white rounded-md ">
					<article className="flex gap-4 py-4 items-center border-b-gray-400 border-b px-4">
						<button className="rounded-full border-2 inline-block w-5 h-5 flex-none"></button>
						<p className="text-gray-600 flex-1">
							Complete online Javascript curse in bluuweb
						</p>
						<button className="flex-none">
							<CrossIcon />
						</button>
					</article>
					<article className="flex gap-4 py-4 items-center border-b-gray-400 border-b px-4">
						<button className="rounded-full border-2 inline-block w-5 h-5 flex-none"></button>
						<p className="text-gray-600 flex-1">
							Complete online Javascript curse in bluuweb
						</p>
						<button className="flex-none">
							<CrossIcon />
						</button>
					</article>
					<section className="p-4 flex justify-between">
						<span className="text-gray-400">5 items left</span>
						<button className="text-gray-400">Clear Completed</button>
					</section>
				</div>
			</main>
			<section className="container mx-auto mt-8 px-4 ">
				<div className="bg-white p-4 rounded-md flex justify-center gap-4">
					<button className="text-blue-500">All</button>
					<button className="hover:text-blue-500">Active</button>
					<button className="hover:text-blue-500">Completed</button>
				</div>
			</section>
			<section>
				<p className="text-center mt-8">Drag&Drop</p>
			</section>
		</div>
	);
};
