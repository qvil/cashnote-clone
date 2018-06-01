import * as React from "react";
import Header from "src/components/Header";
import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
