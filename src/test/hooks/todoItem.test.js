import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../08-useReducer/TodoItem';

describe('Pruebas sobre el todoItem', () => {
  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false,
  };
  const clickEraseEventMock = jest.fn();
  const clickSelectedEventMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el Todo Pendiente', () => {
    render(
      <TodoItem
        todo={todo}
        clickEraseEvent={clickEraseEventMock}
        clickSelectedEvent={clickSelectedEventMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toContain(
      'list-group-item d-flex justify-content-between'
    );
  });

  test('debe de mostrar el Todo completado', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        clickEraseEvent={clickEraseEventMock}
        clickSelectedEvent={clickSelectedEventMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('span debe de llamar el ToggleTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        clickEraseEvent={clickEraseEventMock}
        clickSelectedEvent={clickSelectedEventMock}
      />
    );
    
    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );
    expect(clickSelectedEventMock).toHaveBeenCalledWith(todo.id)
    expect(spanElement.className).toContain('text-decoration-line-through');

  });

  test('el boton eliminar borra el Todo', () => {
    render(
      <TodoItem
        todo={todo}
        clickEraseEvent={clickEraseEventMock}
        clickSelectedEvent={clickSelectedEventMock}
      />
    );
    
    const btnErase = screen.getByLabelText('button-erase');
    fireEvent.click( btnErase );
    expect(clickEraseEventMock).toHaveBeenCalledWith(todo.id)

  });
});


