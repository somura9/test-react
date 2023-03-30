import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // ステートを変更させる変数、関数、初期値を定義
  const [num, setNum] = useState(0);

  return (
    <>
      {/* ={}でJavaScriptのオブジェクトを書く */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントにpropsを渡して動的に */}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      {/* propsを変えるだけで表示を変えられる　＝　使いまわせる */}
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
