import * as React from "react";
import styled from "styled-components";

const Img = styled<ILogoProps, any>("img")`
  width: 160px;
  height: 26px;
  margin-left: 30px;
  src: ${props => props.src};
`;

interface ILogoProps {
  src?: HTMLImageElement & string & File;
}

const Logo: React.SFC<ILogoProps> = props => {
  return (
    <a href="https://qvil.github.io/cashnote-clone/">
      <Img {...props} />
      {/* <Img src={props.src} /> */}
    </a>
  );
};

export default Logo;
