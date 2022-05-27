import 'jest-styled-components';
import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent/>', () => {
  it('should render', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const textcomponent = screen.getByText('Children');
    expect(textcomponent).toBeInTheDocument();
  });

  it('should render correct text sizes', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
