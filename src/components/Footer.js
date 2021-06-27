import React from "../utils/react.js";
import { logoTop, logoBottom } from "./constant.js";

export default class Footer extends React {
  $target = null;

  styled = `
    .footerInner {
      position: relative;
      width: 100%;
      height: 300px;
      bottom: 0;
      background: #f6f6f6;
    }
    .footerWrap {
      width: 1200px;
      margin: 0 auto;
      padding-top: 30px;
      display: flex;
      justify-content: center;
      align-item: center;
    }
    .footerLogo {
      width: 300px;
      display: flex;
      justify-content: center;
      align-item: flex-start;

      img {
        width: 100px;
        height: 76px;
      }
    }
    .fotterText {
      display: grid;
      grid-template-rows: 80px_180px;

      .footerTextTop {
        grid-row: 1/2;

        .logoTopli {
          font-size: 14px;
          color: #333;
          font-weight: bold;
          margin-right: 50px;
          display: inline-block;
        }
      }
      .footerTextBottom {
        grid-row: 2/3;

        .logoBottomli {
          height: 20px;
          font-size: 12px;
          color: #717171;
          display: inline-block;
        }
        .logoBottomText {
          margin: 0_2px;
          padding: 0_5px_0_0;
          border-right: 2px_solid_gray;
        }
      }
    }
  `;

  constructor({ $target }) {
    super();
    this.init($target, "footer");
  }
  // 파싱
  make(array, className) {
    let text = array
      .map(
        (item) => `
        <li class="${className}li">
          <p class="${className}Text">${item}</p>
          <span class="${className}Span"></span>
        </li>
      `
      )
      .join("");
    return text;
  }

  // 가로세로 파싱
  make2D(arrays, className) {
    let y = "<div>";
    for (let array of arrays) {
      let x = "<div>";
      for (let a of array) {
        x += `
          <li class="${className}li">
            <p class="${className}Text">${a}</p>
            <span class="${className}Span"></span>
          </li>
        `;
      }
      x += "</div>";
      y += x;
    }
    y += "</div>";
    return y;
  }

  render() {
    this.$outer.innerHTML = `
      <div class="footerInner">
        <div class="footerWrap">
          <div class="footerLogo" >
            <img src="src/public/footer.png"/>
          </div>
          <div class="fotterText">
            <div class="fotterTextTop">
              ${this.make(logoTop, "logoTop")}
            </div>
            <div class="fotterTextBottom">
              ${this.make2D(logoBottom, "logoBottom")}
            </div>
          </div>
        </div>
      </div>`;
  }
}
