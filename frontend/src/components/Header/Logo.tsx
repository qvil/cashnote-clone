import styled from "styled-components";

const Logo = styled.img`
  width: 160px;
  height: 26px;
  margin-left: 30px;
  src: ${props => props.src};
`;

export default Logo;
