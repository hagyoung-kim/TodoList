import React from 'react';
import Btn from './btn';
import TodoListItem from './todoListItem';

const TodoList = ({ todos, onDelete, onUpdate }) => {
	return (
		<div className="todoList">
			<div className="title">TodoList</div>

			<div className="btns">
				<Btn title="All" />
				<Btn title="Done" />
				<Btn title="Todo" />
			</div>

			{todos.map((todo) => <TodoListItem todo={todo} key={todo.id} onDelete={onDelete} onUpdate={onUpdate} />)}
		</div>
	);
};

export default TodoList;
