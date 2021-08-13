import './App.css';
import { useState, useRef, useCallback } from 'react';
import TodoInsert from './component/todoInsert';
import TodoList from './component/todoList';

function App() {
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			text: '할 일1'
		},
		{
			id: 2,
			text: '할 일2'
		}
	]);

	const nextId = useRef(3);
	//nextId라는 변수에 3을 초기화시키고 이를 새로 등록한 할 일 객체의 id로 활용한다.

	const onAddTodo = (text) => {
		const todo = {
			id: nextId.current,
			text,
			check: false
		};
		setTodos(todos.concat(todo));
		nextId.current += 1;
	};
	//등록버튼을 눌렀을 때 호출되는 함수를 onAddTodo()함수로 정의하는데, 기존 객체의 key가 모두 포함되어 있는 데이터형태를 띄고 있어야 한다.
	//id에는 nextId의 값을 넣고 text에는 전달된 text값을 그대로 넣는다. check에는 기본값으로 false를 넣으며 됨.

	const onDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const onUpdate = (id, text) => {
		//todos의 배열안에 객체의 id가 입력받는 id(클릭한 객체의 id)와 같은 객체의 text를 변경하는 함수.
		// setTodos(todos.map((todo) => todo.id === id ?  : todo))

		// todos.map((item) => item);
		// todos.map((item) => { return item });

		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						id: todo.id,
						text: text
					};
				} else {
					return todo;
				}
			})
		);

		// setTodos(todos.map((todo) => {}))
	};

	return (
		<div>
			<TodoInsert onAddTodo={onAddTodo} />
			<TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
		</div>
	);
}

export default App;
