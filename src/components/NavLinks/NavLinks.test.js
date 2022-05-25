import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<NavLinks/>', () => {
  it('should render', () => {
    renderTheme(<NavLinks>Children</NavLinks>);
    const NavLinks = screen.getByRole('heading');
    expect(NavLinks).toBeInTheDocument();
  });
});
