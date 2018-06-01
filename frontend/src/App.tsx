import * as React from "react";
import Header from "src/components/Header";
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
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
