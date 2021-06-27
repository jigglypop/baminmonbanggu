import React from "../utils/react.js";

export default class Card extends React {
  $target = null;
  styled = `
    .cardInner {
      position: relative;
      display: grid;
      grid-column: 1/2;

      .image {
        img {
          position: relative;
          width: 280px;
          cursor: pointer;
        }
        .underbutton {
          position: absolute;
          transition: all_0.3s_ease-in;

          width: 280px;
          display: flex;
          justify-content: center;
          align-item: center;

          .smallbutton {
            width: 30px;
            height: 30px;
            line-height: 28px;
            color: #000;
            background: #ffffff;
          }
        }
      }
      .text {
        z-index: 1;
        background: #ffffff;
        .red {
          position: relative;
          margin: 0;
          font-size: 20px;
          color: #ff6350;
          font-weight: 600;
        }
        .large {
          margin: 0;
          padding: 3px_0_0_0;
          position: relative;
          font-weight: normal;
          color: #333;
          font-size: 16px;
        }
        .line {
          color: #888;
          text-decoration: line-through;
          margin: 0;
          padding: 20px_0_0_0;
          text-align: left;
          vertical-align: middle;
          font-size: 12px;
        }
        .small {
          margin: 0;
          font-weight: 600;
          font-size: 18px;
          color: #000;
        }
        .mark {
          position: absolute;
          button {
            border: none;
            border-radius: 2px;
            margin-left: 3px;
          }

          .green {
            background: #38ef7d;
          }
          .new {
            background: #6dd5ed;
          }
          .sale {
            background: #ED213A;
          }
          .marktext {
            margin: 0;
            padding: 2px_0;
            color: white;
            font-weight: 600;
          }
        }
      }
    }

   `;

  constructor({ $target, alpha, key, item }) {
    super();
    this.key = key;
    this.alpha = alpha;
    this.item = item;
    this.init($target);

    // hover 이벤트
    const image = this.$outer.querySelector(".image");
    const underbutton = this.$outer.querySelector(".underbutton");
    image.addEventListener("mouseover", function () {
      underbutton.style.marginTop = "-60px";
    });
    image.addEventListener("mouseout", function () {
      underbutton.style.marginTop = "0";
    });
  }
  render() {
    this.$outer.innerHTML = `
      <div class="cardInner" >
        <div class="image">
          <img src="src/public/main${this.alpha}/main${this.alpha}${
      this.key + 1
    }.jpg" />
          <div class="underbutton">
            <button class="smallbutton"><i class="far fa-heart"></i></button>
            <button class="smallbutton"><i class="fas fa-cart-plus"></i></button>
          </div>
        </div>
        <div class="text">
          <p class="red">${this.item[0]}</p>
          <p class="large">${this.item[1]}</p>
          <p class="line">${this.item[2]}</p>
          <p class="small">${this.item[3]}</p>
        </div>

        <div class="mark">
          ${
            this.item[4] == 1
              ? '<button class="green"><p class="marktext">GREEN</p></button>'
              : ""
          }
          ${
            this.item[4] <= 1
              ? '<button class="new"><p class="marktext">NEW</p></button>'
              : ""
          }
          ${
            this.item[4] == 0
              ? '<button class="sale"><p class="marktext">SALE</p></button>'
              : ""
          }
        </div>


      </div>`;
  }
}
