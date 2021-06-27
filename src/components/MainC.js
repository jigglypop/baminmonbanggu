import React from "../utils/react.js";
import Card from "./Card.js";
import { mainC } from "./constant.js";

export default class MainC extends React {
  $target = null;
  styled = `
    .mainC {
      position: relative;
      width: 100%;
      height: 1200px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mainCInner {
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
      <div class="mainC">
        <div class="mainCInner">
          <div class="title">
            <h3>지금은 할인 중</h3>
          </div>
          <div class="content">
          </div>
        </div>
      </div>`;
    const content = this.$outer.querySelector(".content");
    for (let i = 0; i < 8; i++) {
      new Card({ $target: content, alpha: "c", key: i, item: mainC[i] });
    }
  }
}
