import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], deleteTodo, onSelectedTodo}) => {
  const handleErase = (todoId) => {
    deleteTodo(todoId);
  }

  const onClickSelected = (todoId) => {
    onSelectedTodo(todoId)
  }
  
  return (
    <>
      {todos.map(todo => 
        <TodoItem  key={todo.id} todo={todo} clickEraseEvent={handleErase} clickSelectedEvent={onClickSelected}/>
      )}
    </>
  )
}

export default TodoList