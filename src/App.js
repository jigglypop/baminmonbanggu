import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import React from "./utils/react.js";

export default class App extends React {
  $target = null;
  styled = `
  `;

  constructor($target) {
    super();
    this.$target = $target;
    this.init($target);
  }

  render() {
    // 헤더
    new Header({ $target: this.$outer });
    // 메인
    new Main({ $target: this.$outer });
    // 푸터
    new Footer({ $target: this.$outer });
  }
}
