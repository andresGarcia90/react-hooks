import { authReducer } from "../auth/context/authReducer";

describe('Pruebas en authReducer', () => { 
  test('debe de retornar el estado por defecto', () => { 
    const state = {logged: false};
    const authState = authReducer(state, {});
    expect(authState).toEqual(state)
   });
 });