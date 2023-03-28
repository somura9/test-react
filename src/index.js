// reactというライブラリからReactをインポートする
import React from "react";
// コンポーネントを表示するライブラリをインポート
import ReactDom from "react-dom";

const App = () => {
  return (
    // returnする内容は一つのタグで囲わないといけない
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
//jsのなかでreturnしてhtmlを書いていくこれらの記法をJSX記法という
