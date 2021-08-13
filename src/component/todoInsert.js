import React, { useState, useCallback } from 'react';
import Btn from '../component/btn';

const TodoInsert = ({ onAddTodo }) => {
	const [ value, setValue ] = useState('');

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onSubmit = (e) => {
		onAddTodo(value);
		setValue('');
		e.preventDefault();
	};
	//props로 받아온 onInsert() 함수에 현재의 value값을 파라미터로 넣어서 호출하고, 현재 value값을 초기화함.

	return (
		<div className="todoInsert">
			<div className="title">TodoInsert</div>
			<div className="container">
				<form className="todoTitle" onSubmit={onSubmit}>
					<input placeholder="New Todo" value={value} onChange={onChange} />
					<Btn className="insertBtn" type="submit" title="Add new task" onSubmit={onSubmit} />
				</form>
			</div>
			<br />
		</div>
	);
};

export default TodoInsert;
