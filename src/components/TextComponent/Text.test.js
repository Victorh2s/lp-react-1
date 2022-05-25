import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import 'jest-styled-components';

describe('<TextComponent/>', () => {
  it('should render', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const textcomponent = screen.getByRole('heading');
    expect(textcomponent).toBeInTheDocument();
  });
});
