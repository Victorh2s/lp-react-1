import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Children</Base>);
    const Base = screen.getByRole('heading');
    expect(Base).toBeInTheDocument();
  });
});
