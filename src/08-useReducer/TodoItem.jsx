import React from 'react'

export const TodoItem = ({todo, clickEraseEvent, clickSelectedEvent}) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between'>
          <span className={`align-self-center  ${todo.done ? 'text-decoration-line-through' : ''}` } onClick={() => clickSelectedEvent(todo.id)}>{todo.description}</span>
          <button className='btn btn-danger' onClick={() => clickEraseEvent(todo.id)} >Borrar</button>
      </li>
    </>
  )
}
