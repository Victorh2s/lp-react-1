import styled, { css } from 'styled-components';

const backgroundActive = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
${({ theme, background }) => css`
transition: all 300ms ease-in-out;
background: ${theme.colors.white};
color: ${theme.colors.primaryColor};
${background && backgroundActive(theme)}
min-height: 80vh;
display: flex;
align-items: center;
`}
`;
