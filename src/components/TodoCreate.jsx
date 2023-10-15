import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
	const [title, setTitle] = useState("");

	const handleSubmitAddTodo = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			return setTitle("");
		}
		createTodo(title);
		setTitle("");
	};

	return (
		<form
			onSubmit={handleSubmitAddTodo}
			className="bg-white rounded-md overflow-hidden py-3 gap-4 items-center flex px-4 mt-8 dark:bg-gray-800"
			action=""
		>
			<span className="rounded-full border-2 inline-block w-5 h-5 "></span>
			<input
				type="text"
				placeholder="Create a new todo..."
				className="w-full text-gray-400 outline-none dark:bg-gray-800"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</form>
	);
};

export default TodoCreate;
