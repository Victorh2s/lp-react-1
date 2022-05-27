import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<GoTop />);
    const goTop = screen.getByRole('link', { name: 'Go to top' });
    expect(goTop).toBeInTheDocument();
    expect(goTop).toHaveAttribute('href', '#');
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          aria-label="Go to top"
          class="sc-bczRLJ krZKzc"
          href="#"
          title="Go to top"
        >
          <svg
            aria-hidden="true"
            class="StyledIconBase-ea9ulj-0 lbJwfL"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
            <path
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
