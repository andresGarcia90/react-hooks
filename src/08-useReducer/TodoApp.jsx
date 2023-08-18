import React, { useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';

export const TodoApp = () => {

  const [todos, handleDeleteTodo, handleAddTodo, handleSelectedTodo] = useTodos();

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList todos={todos} deleteTodo={handleDeleteTodo} onSelectedTodo={handleSelectedTodo}/>
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
