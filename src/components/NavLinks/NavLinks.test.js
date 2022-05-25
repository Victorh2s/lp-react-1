import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';
import 'jest-styled-components';

describe('<NavLinks/>', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mock} />);
    const navlinks = screen.getAllByRole('link');
    expect(navlinks).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks links={mock} />);
    const navlinks = screen.queryAllByText(/links/i);
    expect(navlinks).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    const navlinks = screen.getByText(/link 10/).parentElement;
    expect(navlinks).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
