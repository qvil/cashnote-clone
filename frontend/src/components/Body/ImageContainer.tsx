import * as React from "react";
import styled from "styled-components";
import { fontBase } from "src/components/common/font";

interface IImageContainerProps {
  src: string;
}

export const BackgroundImage = styled<IImageContainerProps, any>("div")`
  ${fontBase};
  position: relative;
  overflow: hidden;
  display: block;
  background-image: url(${props => props.src});
  background-position: right top;
  background-repeat: no-repeat;
  height: 100vh;
  top: -60px;
`;

const ImageContainer: React.SFC<IImageContainerProps> = props => {
  return <BackgroundImage src={props.src}>asdklfj</BackgroundImage>;
};

export default ImageContainer;
