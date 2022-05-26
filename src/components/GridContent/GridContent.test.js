import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<GridContent/>', () => {
  it('should render', () => {
    renderTheme(<GridContent>Children</GridContent>);
    const Content = screen.getByRole('heading');
    expect(Content).toBeInTheDocument();
  });
});
