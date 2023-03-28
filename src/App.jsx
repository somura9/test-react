import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      {/* ={}でJavaScriptのオブジェクトを書く */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントにpropsを渡して動的に */}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      {/* propsを変えるだけで表示を変えられる　＝　使いまわせる */}
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
