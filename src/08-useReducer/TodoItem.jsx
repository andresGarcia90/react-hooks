import React from 'react';

export const TodoItem = ({ todo, clickEraseEvent, clickSelectedEvent }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          aria-label='span'
          className={`align-self-center  ${
            todo.done ? 'text-decoration-line-through' : ''
          }`}
          onClick={() => clickSelectedEvent(todo.id)}
        >
          {todo.description}
        </span>
        <button
          aria-label='button-erase'
          className="btn btn-danger"
          onClick={() => clickEraseEvent(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
