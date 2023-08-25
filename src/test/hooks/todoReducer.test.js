import { todoReducer } from '../../08-useReducer/todoReducer';

describe('Pruebas en el todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un todo', () => {
    const action = {
      type: '[TODO] add todo',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un todo', () => {
    const action = {
      type: '[TODO] Delete todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);

    const action2 = {
      type: '[TODO] add todo',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    };
    const newState2 = todoReducer(newState, action2);
    expect(newState2.length).toBe(1);


  });

  test('debe de realizar el Toggle del todo', () => {
    const newState = todoReducer(initialState, {});
    const action = {
      type: '[TODO] select todo',
      payload: 1,
    }
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toEqual(true);
  });
});
