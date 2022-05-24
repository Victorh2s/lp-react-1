import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './index';

//Renderizando o componente e testando o css
describe('<Home/>', () => {
  test('renders learn react link', () => {
    renderTheme(<Home />);
  });
});
// expect(headingContainer).toHaveStyleRule('background', 'blue');
