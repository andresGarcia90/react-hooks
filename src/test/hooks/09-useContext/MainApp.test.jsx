import { render, screen } from '@testing-library/react';
import { MainApp } from '../../../09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en MainApp', () => {
  test('debe de mostrar homepage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeTruthy()
  });

  test('debe de mostrar login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeTruthy();
  });
  
});
