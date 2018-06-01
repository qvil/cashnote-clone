import * as React from "react";
import HeaderContainer from "./HeaderContainer";
import ItemList from "./ItemList";
import Logo from "./Logo";
import logo from "src/images/160xNxcn_kor.png.pagespeed.ic.Zjfk9HwEtM.png";

class Header extends React.Component {
  public render(): any {
    return (
      <HeaderContainer>
        <Logo src={logo} />
        <ItemList />
      </HeaderContainer>
    );
  }
}

export default Header;
