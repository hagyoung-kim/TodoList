import React, { useState } from 'react';

const TodoListItem = ({ todo, onDelete, onUpdate, onChengeCheck }) => {
	const [ checked, setChecked ] = useState(todo.check);
	const [ update, setUpdate ] = useState(false);

	const textHandler = (e) => {
		console.log(e.target.value);
		setTextBox(e.target.value);
	};

	const { id, text } = todo;
	const [ textBox, setTextBox ] = useState(text);

	return (
		<div className="todoListItem">
			{update ? (
				<input onChange={(e) => textHandler(e)} value={textBox} />
			) : (
				<div className={checked ? 'checked' : 'text'}>{text}</div>
			)}

			<div className="box">
				<div>
					<input
						className="checkbox"
						type="checkbox"
						checked={checked}
						onChange={() => {
							// input type으로 checkbox사용할 땐 onClick말고 onChange로 사용.
							setChecked(!checked);
							onChengeCheck(id, !checked);
						}}
					/>
					{/* {checked ? '체크완료' : '체크해제'} */}
				</div>

				{update ? (
					<button
						className="update"
						onClick={() => {
							setUpdate(!update);
							onUpdate(id, textBox);
						}}
					>
						확인
					</button>
				) : (
					<button
						className="update"
						onClick={() => {
							checked ? alert('체크 완료 항목은 수정할 수 없습니다.') : setUpdate(!update);
						}}
					>
						수정
					</button>
				)}

				<button className="delete" onClick={() => onDelete(id)}>
					삭제
				</button>
			</div>
		</div>
	);
};

export default TodoListItem;

//updata가 true일 때 text를 onUpdate함수를 실행해서 onclick ? input으로 변경 : 아니면 그대로인 조건문을
