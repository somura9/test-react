// reactというライブラリからReactをインポートする
import React from "react";
// コンポーネントを表示するライブラリをインポート
import ReactDom from "react-dom";

//コンポーネントをインポート
import App from "./App.jsx";

ReactDom.render(<App />, document.getElementById("root"));
//jsのなかでreturnしてhtmlを書いていくこれらの記法をJSX記法という
