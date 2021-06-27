import React from "../utils/react.js";
import { bottom, top } from "./constant.js";

export default class Header extends React {
  $target = null;

  styled = `
    li {
      list-style: none;
    }
    p {
      display: inline-block;
      padding: 0px_10px_0px_0px;
      font-size: 12px;
      line-height: 40px;
      height: 40px;
      font-weight: 500;
      cursor: pointer;
    }
    .topSpan {
      display: inline-block;
      width: 1px;
      height: 7px;
      margin: 0_10px_0_0;
      background: #ddd;
      vertical-align: 0px;
    }
    .headerInner {
      position: relative;
      background: #ffffff;
      width: 100%;
      display: grid;
      grid-template-rows: 40px_100px_55px;
      grid-template-columns: 1fr_400px;
      z-index: 2;
      transition: all_0.3s_ease-in;
    }
    .top {
      position: relative;
      padding: 0_50px;

      grid-row: 1/2;
      grid-column: 1/3;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      border-bottom: 1px_solid_#eaeaea;
    }

    .mid {
      position: relative;
      grid-row: 2/3;
      grid-column: 1/3;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bottom {
      position: relative;
      grid-row: 3/4;
      grid-column: 1/3;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      min-width: 1000px;

      .bottomText {
        padding: 0 19px;
        font-size: 16px;
        color: #333;
        font-weight: normal;
        text-align: center;
        line-height: 55px;
      }
    }
    img {
      width: 156px;
      height: 39px;
    }
  `;

  constructor({ $target }) {
    super();
    this.init($target, "header");

    // 스크롤 이벤트
    const header = this.$outer.querySelector(".headerInner");
    const top = header.querySelector(".top");
    const mid = header.querySelector(".mid");
    const bottom = header.querySelector(".bottom");

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.gridTemplateRows = "50px 50px";

        top.style.gridRow = "1/2";
        top.style.gridColumn = "2/3";
        top.style.borderBottom = "none";

        mid.style.gridRow = "1/2";
        mid.style.gridColumn = "1/2";
        mid.style.justifyContent = "flex-start";
        mid.style.paddingLeft = "45vw";

        bottom.style.gridRow = "2/3";
        bottom.style.gridColumn = "1/3";
        bottom.style.borderTop = " 1px solid #eaeaea";
      } else {
        header.style.position = "relative";
        header.style.gridTemplateRows = "40px 100px 55px";

        top.style.gridRow = "1/2";
        top.style.gridColumn = "1/3";
        top.style.borderBottom = " 1px solid #eaeaea";

        mid.style.gridRow = "2/3";
        mid.style.gridColumn = "1/3";
        mid.style.justifyContent = "center";
        mid.style.paddingLeft = "0";

        bottom.style.gridRow = "3/4";
        bottom.style.gridColumn = "1/3";
        bottom.style.borderTop = "none";
      }
    });
  }

  // 파싱
  make(array, className) {
    let text = array
      .map(
        (item) => `
        <li>
          <p class="${className}Text">${item}</p>
          <span class="${className}Span"></span>
        </li>
      `
      )
      .join("");
    return text;
  }

  render() {
    this.$outer.innerHTML = `
      <div class="headerInner">
        <div class="top">
          ${this.make(top, "top")}
        </div>
        <div class="mid">
          <img src="src/public/main.png"/>
        </div>
        <div class="bottom">
          ${this.make(bottom, "bottom")}
        </div>
      </div>`;
  }
}
