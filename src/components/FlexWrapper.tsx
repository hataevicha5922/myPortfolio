import styled from "styled-components";

type FlexWrapperPropsTypes = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsTypes>`
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  height: 100%;
`;
