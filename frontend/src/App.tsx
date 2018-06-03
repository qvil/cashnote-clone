import * as React from "react";
import Header from "src/components/Header";
import { Button } from "src/components/CustomerCenter";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "src/constants/theme";

injectGlobal`
  @font-face {
    font-family: 'NanumSquareRound',sans-serif;
    src: url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
  }
  
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Button title="고객센터" />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
