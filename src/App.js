import './App.css';
import { useState, useRef } from 'react';
import TodoInsert from './component/todoInsert';
import TodoList from './component/todoList';

function App() {
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			text: 'React',
			check: false
		},
		{
			id: 2,
			text: 'React22222',
			check: false
		}
	]);
	console.log(todos);

	const nextId = useRef(3);

	const onAddTodo = (text) => {
		const todo = {
			id: nextId.current,
			text: text,
			check: false
		};
		setTodos(todos.concat(todo));
		nextId.current += 1;
	};

	const onDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const onAllDelete = () => {
		setTodos([]);
	};

	const onUpdate = (id, text) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						id: todo.id,
						text: text,
						check: todo.check
					};
				} else {
					return todo;
				}
			})
		);
	};

	const onChengeCheck = (id, check) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						id: todo.id,
						text: todo.text,
						check: check
					};
				} else {
					return todo;
				}
			})
		);
	};

	return (
		<div>
			<TodoInsert onAddTodo={onAddTodo} />
			<TodoList
				todos={todos}
				setTodos={setTodos}
				onDelete={onDelete}
				onUpdate={onUpdate}
				onAllDelete={onAllDelete}
				onChengeCheck={onChengeCheck}
			/>
		</div>
	);
}

export default App;
