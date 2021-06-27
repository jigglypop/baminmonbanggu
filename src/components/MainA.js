import React from "../utils/react.js";
import Card from "./Card.js";
import { mainA } from "./constant.js";

export default class MainA extends React {
  $target = null;
  $target = null;
  styled = `
    .mainA {
      position: relative;
      width: 100%;
      height: 600px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mainAInner {
      position: relative;
      width: 1200px;
      height: 100%;

      display: grid;
      grid-template-rows: 100px_500px;
    }

    .title {
      grid-row: 1/2;
      h3 {
        font-weight: 600;
        letter-spacing: -.3px;
        font-size: 26px;
        text-align: left;
      }
    }
    .content {
      grid-row: 2/3;

      display: grid;
      grid-template-columns: 1fr_1fr_1fr_1fr;
    }
   `;

  constructor({ $target }) {
    super();
    this.init($target);
  }

  render() {
    this.$outer.innerHTML = `
      <div class="mainA">
        <div class="mainAInner">
          <div class="title">
            <h3>잘나가요</h3>
          </div>
          <div class="content">
          </div>
        </div>
      </div>`;

    const content = this.$outer.querySelector(".content");
    for (let i = 0; i < 4; i++) {
      new Card({ $target: content, alpha: "a", key: i, item: mainA[i] });
    }
  }
}
