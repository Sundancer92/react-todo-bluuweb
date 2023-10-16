import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todoList")) || [];

export const App = () => {
	const [todos, setTodos] = useState(initialStateTodos);

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todos));
	}, [todos]);

	const createTodo = (title) => {
		const newTodo = {
			id: Date.now(),
			title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const updateTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	const [filter, setFilter] = useState("all");

	const filteredTodos = () => {
		switch (filter) {
			case "all":
				return todos;
			case "active":
				return todos.filter((todo) => !todo.completed);
			case "completed":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	return (
		<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-gray-900">
			{/* Header */}
			<Header />
			<main className="container px-4 mx-auto mt-4">
				<TodoCreate createTodo={createTodo} />

				{/* TodoList (TodoItem) -TodoUpdate -TodoDelete */}
				<TodoList
					todos={filteredTodos()}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
				/>
				{/* TodoComputed */}
				<TodoComputed
					computedItemsLeft={computedItemsLeft}
					clearCompleted={clearCompleted}
				/>
				{/* TodoFilter */}
				<TodoFilter
					setFilter={setFilter}
					filter={filter}
				/>
			</main>

			<footer className="mt-8 text-center dark:text-gray-400">
				Drag&Drop
			</footer>
		</div>
	);
};
