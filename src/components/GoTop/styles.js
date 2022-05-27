import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: none;
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
  `}
`;
