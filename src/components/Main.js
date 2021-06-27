import React from "../utils/react.js";
import Carousel from "./Carousel.js";
import Gift from "./Gift.js";

import MainA from "./MainA.js";
import MainB from "./MainB.js";
import MainC from "./MainC.js";

export default class Main extends React {
  $target = null;
  styled = `

   `;

  constructor({ $target }) {
    super();
    this.init($target);
  }

  render() {
    // 캐러셀
    new Carousel({ $target: this.$outer });
    // 메인 A
    new MainA({ $target: this.$outer });
    // 메인 B
    new MainB({ $target: this.$outer });
    // 선물
    new Gift({ $target: this.$outer });
    // 메인 C
    new MainC({ $target: this.$outer });
  }
}
