import React from "react";
import IconCross from "./icons/IconCross";
import { IconCheck } from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
	const { id, title, completed } = todo;

	return (
		<article className="flex gap-4 py-4 items-center border-b-gray-400 border-b px-4">
			{/* <button className="rounded-full border-2 inline-block w-5 h-5 flex-none">
				<IconCheck />
			</button> */}

			<button
				onClick={() => updateTodo(id)}
				className={`w-5 h-5 flex-none rounded-full border-2
				${
					completed
						? "bg-gradient-to-br from-sky-400  to-purple-500 flex justify-center items-center"
						: "inline-block"
				}`}
			>
				{completed && <IconCheck />}
			</button>
			<p
				className={` flex-1 ${
					completed ? "line-through text-gray-300" : "text-gray-600"
				}`}
			>
				{title}
			</p>
			<button
				className="flex-none"
				onClick={() => removeTodo(id)}
			>
				<IconCross />
			</button>
		</article>
	);
};

export default TodoItem;
