import React, { useState } from 'react';
// import { MdDone, MdDelete } from 'react-icons/md';

const TodoListItem = ({ todo, onDelete, onUpdate }) => {
	const [ checked, setChecked ] = useState(false); //(값 명확히 알기!)boolean값을 초기값으로 넣어뒀는데 아래 함수에서는 오브젝트형식으로 만들어놓았기 때문에 체크가 적용이 안되고있었음.
	const [ update, setUpdate ] = useState(false);

	const onChangeHandle = (e) => {
		setChecked(e.target.checked);
		// console.log(e.target.checked);
	};

	const { id, text, check } = todo;

	const [ textBox, setTextBox ] = useState('');

	return (
		<div className="todoListItem">
			{update ? <input /> : <div className={checked ? 'checked' : 'text'}>{text}</div>}

			<div className="box">
				<div>
					<input type="checkbox" checked={checked} onChange={onChangeHandle} />
					{/* {checked ? '체크완료' : '체크해제'} */}
				</div>

				<button
					className="update"
					onClick={() => {
						setUpdate(!update);
					}}
				>
					{update ? '확인' : '수정'}
				</button>

				<button className="delete" onClick={() => onDelete(id)}>
					Delete
				</button>
			</div>
			{/* </div> */}
		</div>
	);
};

export default TodoListItem;

//updata가 true일 때 text를 onUpdate함수를 실행해서 onclick ? input으로 변경 : 아니면 그대로인 조건문을
