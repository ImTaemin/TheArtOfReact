import React, { useReducer } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {    
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

  const [state, onChange] = useInputs({
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
