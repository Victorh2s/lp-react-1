import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<LogoLink/>', () => {
  it('should render', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    const logolink = screen.getByRole('heading');
    expect(logolink).toBeInTheDocument();
  });
});
