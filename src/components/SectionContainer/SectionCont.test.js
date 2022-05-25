import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<SectionContainer/>', () => {
  it('should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    const sectionCont = screen.getByRole('heading');
    expect(sectionCont).toBeInTheDocument();
  });
});
