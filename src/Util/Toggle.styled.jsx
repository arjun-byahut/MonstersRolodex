import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.2rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  left: 50%;
  top: 20px;
  svg {
    height: auto;
    width: 1.3rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

export default ToggleContainer;
