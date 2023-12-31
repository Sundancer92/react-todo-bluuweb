import React from "react";

const TodoFilter = ({ setFilter, filter }) => {
	return (
		<section className="container mx-auto mt-8 ">
			<div className="bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800">
				<button
					className={`${
						filter === "all"
							? "text-blue-500 hover:text-gray-400"
							: "text-gray-500"
					}`}
					onClick={() => setFilter("all")}
				>
					All
				</button>
				<button
					className={`${
						filter === "active"
							? "text-blue-500 hover:text-gray-400"
							: "text-gray-500"
					}`}
					onClick={() => setFilter("active")}
				>
					Active
				</button>
				<button
					className={`${
						filter === "completed"
							? "text-blue-500 hover:text-gray-400"
							: "text-gray-500"
					}`}
					onClick={() => setFilter("completed")}
				>
					Completed
				</button>
			</div>
		</section>
	);
};

export default TodoFilter;
