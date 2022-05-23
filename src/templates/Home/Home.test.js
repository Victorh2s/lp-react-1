import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './index';

//Renderizando o componente e testando o css
test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondary,
  });

  expect(headingContainer).toMatchSnapshot();
});
// expect(headingContainer).toHaveStyleRule('background', 'blue');
