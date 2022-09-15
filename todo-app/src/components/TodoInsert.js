import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //onClick이 아닌 onSubmit을 사용한 이유는
  //인풋에서 엔터를 눌렀을 때도 발생하기 때문.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value 값 초기화

      //새로고침 방지(submit)
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일 입력" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
