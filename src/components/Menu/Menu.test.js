import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Menu/>', () => {
  it('should render', () => {
    renderTheme(<Menu>Children</Menu>);
    const menu = screen.getByRole('heading');
    expect(menu).toBeInTheDocument();
  });
});
