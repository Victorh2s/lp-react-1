import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    const footer = screen.getByRole('heading', { name: 'Olá' });
    expect(footer).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="sc-dkzDqf cSazVU"
        >
          <div
            class="sc-bczRLJ jYnuLy"
          >
            <div
              class="sc-gsnTZi gNZDCw"
            >
              <h1>
                Olá
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
