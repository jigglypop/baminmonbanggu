import React from "../utils/react.js";

export default class Carousel extends React {
  $target = null;
  styled = `
    .carouselOuter {
      position: relative;
    }
    .carouselInner {
      width: 1520px;
      height: 500px;
      overflow: hidden;
    }
    .carousels {
      display: flex;
      justify-content: center;
      align-item: center;
      transition: all_0.3s_ease-in;
      transform: translateX(1520px);
    }
    .carousel {
      width: 1520px;
      height: 500px;
      object-fit: cover;
    }
    .carouselButton {
      position: absolute;
      width: 1520px;
      margin-top: -100px;

      display: flex;
      justify-content: center;
      align-item: center;    
    }

    .carouselButton {
      position: absolute;
      width: 1520px;
      margin-top: -50px;

      display: flex;
      justify-content: center;
      align-item: center; 

      li {
        position: relative;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        width: 15px;
        height: 15px;

        display: flex;
        justify-content: center;
        align-item: center; 
      }
         
      .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #b5b5b5;
        cursor: pointer;
        border: none;
      }
      h4 {
        visibility: hidden;
      }

    }
   `;

  constructor({ $target }) {
    super();
    this.init($target);
    this.moveCarousel();
  }

  moveCarousel() {
    // 클릭
    const buttons = this.$outer.querySelectorAll(".dot");
    buttons[0].style.background = "#ffffff";

    const carousels = this.$outer.querySelector(".carousels");
    for (let button of buttons) {
      button.addEventListener("click", function () {
        buttons.forEach((button) => {
          button.style.background = "#b5b5b5";
        });
        this.style.background = "#ffffff";
        if (this.id === "btnc1") {
          carousels.style.transform = "translateX(1520px)";
        } else if (this.id === "btnc2") {
          carousels.style.transform = "translateX(0)";
        } else {
          carousels.style.transform = "translateX(-1520px)";
        }
      });
    }
  }

  render() {
    this.$outer.innerHTML = `
      <div class="carouselOuter">
        <div class="carouselInner">
          <div class="carousels">
            <img src="src/public/carousel/img1.gif" class="carousel" id="imgc1">
            <img src="src/public/carousel/img2.gif" class="carousel" id="imgc2">
            <img src="src/public/carousel/img3.gif" class="carousel" id="imgc3">
          </div>
        </div>
        <div class="carouselButton">
          <li>
            <button class="dot visible" id="btnc1"><h4>1</h4></button>
          </li>
          <li>
            <button class="dot" id="btnc2"><h4>2</h4></button>
          </li>
          <li>
            <button class="dot" id="btnc3"><h4>3</h4></button>
          </li>
        </div>
      </div>
    `;
  }
}
