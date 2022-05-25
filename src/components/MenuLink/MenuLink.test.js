import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<MenuLink/>', () => {
  it('should render', () => {
    renderTheme(<MenuLink>Children</MenuLink>);
    const MenuLink = screen.getByRole('heading');
    expect(MenuLink).toBeInTheDocument();
  });
});
