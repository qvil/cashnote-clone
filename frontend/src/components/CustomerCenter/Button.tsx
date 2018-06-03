import * as React from "react";
import styled from "styled-components";
import { fontBase } from "src/components/common/font";

export interface IButtonProps {
  title: string;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 126px;
  height: 45px;
  border-radius: 22px;
  cursor: pointer;
  background-color: ${props => props.theme.color.secondary};
  color: white;
  ${fontBase};
  font-weight: 700;
  letter-spacing: 0.6;
  font-size: 15px;
`;

const Icon = styled.span`
  border: 2px solid white;
  border-radius: 24px;
  padding: 4px;
`;

export default class Button extends React.Component<IButtonProps, any> {
  public render() {
    return (
      <ButtonContainer>
        <Icon>?</Icon>
        {this.props.title}
      </ButtonContainer>
    );
  }
}
