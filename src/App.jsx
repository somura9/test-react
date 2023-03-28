import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    // キャメルケースで記述, 文字列で囲う
    fonstSize: "18px"
  };

  return (
    <>
      {/* ={}でJavaScriptのオブジェクトを書く */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>保存し忘れてた</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
