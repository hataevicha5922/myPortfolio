import React from "react";
import { Header } from "./layout/header/Header.styled";
import { Main } from "./layout/main/Main";
import { LeftMenu } from "./layout/leftMenu/LeftMenu";
import { FlexWrapper } from "./components/FlexWrapper";

function App() {
  return (
    <div className="App">
      <FlexWrapper>
        <LeftMenu />
        <Main />
        <Header />
      </FlexWrapper>
    </div>
  );
}

export default App;
