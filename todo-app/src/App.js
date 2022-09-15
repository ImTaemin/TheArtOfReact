import React, { useReducer, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type) {
    case 'INSERT': //추가
    //{type: 'INSECT', todo:{id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE': //제거
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': //토글
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //고윳값으로 사용될 id
  const nextId = useRef(2501);

  //추가
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      // setTodos((todos) => todos.concat(todo));
      dispatch({type: 'INSERT', todo});
      nextId.current += 1;
    },
    // [todos],
    []
  );

  //id로 삭제
  const onRemove = useCallback(
    (id) => {
      // setTodos(todos.filter((todo) => todo.id !== id));
      // setTodos((todos) => todos.filter((todo) => todo.id !== id));
      dispatch({type: 'REMOVE', id});
    },
    // [todos],
    []
  );

  //수정
  const onToggle = useCallback(
    (id) => {
      // setTodos(
      //   todos.map((todo) =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //   ),
      // );

      // setTodos((todos) =>
      //   todos.map((todo) =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //   ),
      // );
      dispatch({type: 'TOGGLE', id});
    },
    // [todos],
    []
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
