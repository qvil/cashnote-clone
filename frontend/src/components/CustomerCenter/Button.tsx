import * as React from "react";
import styled from "styled-components";
import { fontBase } from "src/components/common/font";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

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
  width: 134px;
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

const Icon = styled(HelpOutlineIcon)`
  margin-right: ${props => props.theme.spacing.unit}px;
`;

const Text = styled.span`
  ${fontBase};
  font-weight: 700;
`;

export default class Button extends React.Component<IButtonProps, any> {
  public render() {
    return (
      <ButtonContainer>
        <Icon />
        <Text>{this.props.title}</Text>
      </ButtonContainer>
    );
  }
}
