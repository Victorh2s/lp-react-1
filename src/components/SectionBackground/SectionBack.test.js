import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<SectionBackground/>', () => {
  it('should render', () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    const SectionBack = screen.getByRole('heading');
    expect(SectionBack).toBeInTheDocument();
  });
});
