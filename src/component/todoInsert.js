import React, { useState } from 'react';
import Btn from '../component/btn';

const TodoInsert = ({ onAddTodo }) => {
	const [ value, setValue ] = useState('');

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onSubmit = (e) => {
		onAddTodo(value);
		setValue('');
	};
	//props로 받아온 onInsert() 함수에 현재의 value값을 파라미터로 넣어서 호출하고, 현재 value값을 초기화함.

	return (
		<div className="todoInsert">
			<div className="title">TodoInsert</div>
			<div className="container">
				<div className="todoTitle" onSubmit={onSubmit}>
					<input placeholder="New Todo" value={value} onChange={onChange} />
					<Btn type="submit" title="Add new task" onClick={onSubmit} />
				</div>
			</div>
			<br />
		</div>
	);
};

export default TodoInsert;
