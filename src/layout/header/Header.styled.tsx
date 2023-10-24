import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 100vh;
  background-color: aquamarine;
`;
