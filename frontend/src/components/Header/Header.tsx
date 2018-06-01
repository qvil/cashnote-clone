import * as React from "react";
import HeaderContainer from "./HeaderContainer";
import ItemList from "./ItemList";
// import HeaderContainer, { ItemList } from ".";

class Header extends React.Component {
  public render(): any {
    return (
      <HeaderContainer>
        <ItemList />
        <ItemList />
      </HeaderContainer>
    );
  }
}

export default Header;
