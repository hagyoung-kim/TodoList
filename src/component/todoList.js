import React, { useEffect, useState } from 'react';
import Btn from './btn';
import TodoListItem from './todoListItem';

const TodoList = ({ todos, onDelete, onUpdate, onAllDelete, onChengeCheck, setTodos }) => {
	// const [show, setShow] = useState(todos);
	const [ state, setState ] = useState('all');

	// useEffect(
	// 	() => {
	// 		setShow(todos);
	// 	},
	// 	[ todos ]
	// );

	const allBtn = () => {
		setState('all');
	};
	const doneBtn = () => {
		setState('done');
	};
	const todoBtn = () => {
		setState('todo');
	};

	return (
		<div className="todoList">
			<div className="title">TodoList</div>

			<div className="btns">
				<Btn title="All" onClick={allBtn} />
				<Btn title="Done" onClick={doneBtn} />
				<Btn title="Todo" onClick={todoBtn} />
			</div>

			{/* {todos.map((todo) => (
				<TodoListItem
					todo={todo}
					key={todo.id}
					onDelete={onDelete}
					onUpdate={onUpdate}
					onAllDelete={onAllDelete}
					onChengeCheck={onChengeCheck}
				/>
			))} */}
			<div>
				{state === 'all' ? (
					todos.map((todo) => (
						<TodoListItem
							todo={todo}
							key={todo.id}
							onDelete={onDelete}
							onUpdate={onUpdate}
							onAllDelete={onAllDelete}
							onChengeCheck={onChengeCheck}
						/>
					))
				) : state === 'done' ? (
					todos
						.filter((todo) => {
							return todo.check === true;
						})
						.map((todo) => (
							<TodoListItem
								todo={todo}
								key={todo.id}
								onDelete={onDelete}
								onUpdate={onUpdate}
								onAllDelete={onAllDelete}
								onChengeCheck={onChengeCheck}
							/>
						))
				) : (
					todos
						.filter((todo) => {
							return todo.check === false;
						})
						.map((todo) => (
							<TodoListItem
								todo={todo}
								key={todo.id}
								onDelete={onDelete}
								onUpdate={onUpdate}
								onAllDelete={onAllDelete}
								onChengeCheck={onChengeCheck}
							/>
						))
				)}
			</div>

			<div className="allBtns">
				<Btn title="체크항목 전체 삭제" todos={todos} setTodos={setTodos} />
				<Btn title="항목 전체 삭제" onClick={onAllDelete} />
			</div>
		</div>
	);
};

export default TodoList;
