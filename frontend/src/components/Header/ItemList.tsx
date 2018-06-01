import * as React from "react";
// import styled from "styled-components";
import styled, { css } from "styled-components";

const StyledItemList = styled.ul`
  display: flex;
  float: right;
  list-style-type: none;
  padding: 0px;
  margin: 0px 16px;
  min-height: 60px;
`;

interface IStyledItemProps {
  highlight: string;
}

const fontBase = css`
  font-family: "NanumSquareRound", sans-serif;
  font-weight: 400;
  font-size: 15px;
`;

const StyledItem = styled<IStyledItemProps, any>("li")`
  ${fontBase};
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  color: ${props =>
    props.highlight ? props.theme.color.primary : props.theme.color.secondary};
  padding: 8px;
  font-style: normal;
  text-align: right;
  cursor: pointer;
  min-width: 70px;
  &:hover {
    margin-bottom: ${props => props.theme.spacing.unit}px;
    transition: 0.3s;
  }
`;

export interface IItemListProps {
  items?: string;
  showModile?: string;
  highlight?: string;
}

export default class ItemList extends React.Component<IItemListProps, any> {
  public render() {
    return (
      <StyledItemList>
        <StyledItem>카드매출 관리</StyledItem>
        <StyledItem>세무사 찾기</StyledItem>
        <StyledItem>가격</StyledItem>
        <StyledItem highlight={true}>로그인</StyledItem>
        <StyledItem highlight={true}>회원가입</StyledItem>
      </StyledItemList>
    );
  }
}

// export default ItemList;
