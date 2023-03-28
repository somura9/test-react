import React from "react";

// 設定したpropが渡ってくる
const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // color: color => プロパティ名と値が同じなら省略できる
    color,
    // キャメルケースで記述, 文字列で囲う
    fonstSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
