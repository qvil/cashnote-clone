import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  min-height: 60px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
`;

class Header extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
      </div>
    );
  }
}

export default Header;
