import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
	{
		id: 1,
		title: "Go to the gym",
		completed: true,
	},
	{
		id: 2,
		title: "Complete online Javascript bluuweb",
		completed: false,
	},
	{
		id: 3,
		title: "Comprar pan",
		completed: false,
	},
	{
		id: 4,
		title: "10 minutes meditation",
		completed: false,
	},
];

export const App = () => {
	const [todos, setTodos] = useState(initialStateTodos);

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
		<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
			{/* Header */}
			<Header />
			<main className="container mx-auto px-4 mt-4">
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

			<footer className="text-center mt-8">Drag&Drop</footer>
		</div>
	);
};
