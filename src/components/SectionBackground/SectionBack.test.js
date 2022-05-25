import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground/>', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    const SectionBack = screen.getByRole('heading');
    expect(SectionBack).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    const SectionBack = screen.getByRole('heading');
    expect(SectionBack).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});