import React from "../utils/react.js";
import Card from "./Card.js";
import { mainB } from "./constant.js";

export default class MainB extends React {
  $target = null;
  styled = `
    .mainB {
      position: relative;
      width: 100%;
      height: 1200px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mainBInner {
      position: relative;
      width: 1200px;
      height: 100%;

      display: grid;
      grid-template-rows: 100px_1100px;
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
      <div class="mainB">
        <div class="mainBInner">
          <div class="title">
            <h3>새로 나왔어요</h3>
          </div>
          <div class="content">
          </div>
        </div>
      </div>`;

    const content = this.$outer.querySelector(".content");
    for (let i = 0; i < mainB.length; i++) {
      new Card({ $target: content, alpha: "b", key: i, item: mainB[i] });
    }
  }
}
