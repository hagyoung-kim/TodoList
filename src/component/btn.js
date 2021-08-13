import React from 'react';

const Btn = ({ title, onClick, todos, setTodos }) => {
	const todoCheck = () => {
		const a = todos.filter((todo) => {
			return todo.check === false;
		});
		setTodos(a);
	};

	return (
		<div>
			<button className="todoBtn" onClick={() => (todos ? todoCheck() : onClick())}>
				{title}
			</button>
		</div>
	);
};

export default Btn;
