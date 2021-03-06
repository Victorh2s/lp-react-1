import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { mockBase } from './mock';
import { Base } from '.';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
