export const todoReducer = ( initialState, action ) => {
  switch (action.type) {
    case '[TODO] add todo':
      return [...initialState, action.payload];
    case '[TODO] Delete todo':
      const filterTodoList = initialState.filter(todo => todo.id != action.payload)
      return [...filterTodoList];
    case '[TODO] select todo':
      const todo = initialState.find(todo => todo.id == action.payload);
      todo.done = !todo.done;
      return [...initialState.filter(todo => todo.id != action.payload), todo]


    default:
      return initialState;
  }
}