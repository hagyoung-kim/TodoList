import './App.css';
import { useState, useRef } from 'react';
import TodoInsert from './component/todoInsert';
import TodoList from './component/todoList';

function App() {
	const [ todos, setTodos ] = useState([]);
	console.log(todos);

	const nextId = useRef(1);
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
		//id를 파라미터로 받아와 같은 id를 가진 항목을 todos배열에서 지워주면(filter) 된다.
	};
	// 각 객체의 id를 받아와서 해당 아이디를 가진 객체만 제외하고 새로운 배열을 만드는 함수.
	//filter함수는 배열에서 특정조건을 만족하는 값들만 따로 주출하여 새로운 배열을 만드는 함수이다.
	//조건을 확인해주는 함수를 파라미터로 넣되, 그 함수는 true/false 값을 반환해야 한다. 여기서 true로 반환되는 경우에만 새로운 배열이 추가된다.

	const onAllDelete = () => {
		setTodos([]);
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
						text: text,
						check: todo.check
					};
				} else {
					return todo;
				}
			})
		);
		// setTodos(todos.map((todo) => {}))
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
