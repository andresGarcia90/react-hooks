import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Recolectar la piedra del poder',
    done: false,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    const todosString = JSON.stringify(todos);
    localStorage.setItem('todos', todosString);
  }, [todos]);

  const handleDeleteTodo = (todoId) => {
    dispatch(
      {
        type: '[TODO] Delete todo',
        payload: todoId
      }
    )
  };

  const handleAddTodo = (todo) => {
    dispatch(
      {
        type: '[TODO] add todo',
        payload: todo
      }
    )
  };

  const handleSelectedTodo = (todoId) => {
    dispatch({
      type: '[TODO] select todo',
      payload: todoId
    });
  }

 return [todos, handleDeleteTodo, handleAddTodo, handleSelectedTodo]


  
}
