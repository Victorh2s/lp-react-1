import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<MenuLink/>', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    const menulink = screen.getByRole('link', { name: 'Children' });
    expect(menulink).toHaveAttribute('target', '_self');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    const menulink = screen.getByRole('link', { name: 'Children' });

    expect(menulink).toHaveAttribute('target', '_blank');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );

    const menulink = screen.getByRole('link', { name: 'Children' });

    expect(menulink).toMatchInlineSnapshot(`
      <a
        class="sc-bczRLJ gdZAOM"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
