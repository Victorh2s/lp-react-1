import { screen } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<GridText/>', () => {
  it('should render', () => {
    renderTheme(<GridText>Children</GridText>);
    const gridText = screen.getByRole('heading');
    expect(gridText).toBeInTheDocument();
  });
});
