import React from "../utils/react.js";

export default class Gift extends React {
  $target = null;
  styled = `
    .gift {
      position: relative;
      width: 100%;
      height: 800px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .giftInner {
      position: relative;
      width: 1200px;
      height: 100%;

      display: grid;
      grid-template-rows: 100px_700px;
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
    }

    .giftitem {
      display: grid;
      grid-template-colunms: 880px_74px;

      .image {
        grid-column: 1/2;
      }
      .text {
        grid-column: 3/4;

        .large {
          font-size: 30px;
          color: #333;
          line-height: 45px;
          margin-bottom: 8px;
        }

        .small {
          font-size: 14px;
        }
      }
    }
  `;

  constructor({ $target }) {
    super();
    this.init($target);
  }

  render() {
    this.$outer.innerHTML = `
      <div class="gift">
        <div class="giftInner">
          <div class="title">
            <h3>선물하기 딱 좋아요!</h3>
          </div>
          <div class="content">
            <div class="giftitem" >
              <div class="image">
                <img src="src/public/gift/gift1.jpg" />
              </div>
              <div class="text">
                <p class="large">소리에 집중해보세요</p>
                <p class="small">을지로 연필. 사각사각</p>
              </div>
            </div>

            <div class="giftitem" >
              <div class="image">
                <img src="src/public/gift/gift2.jpg" />
              </div>
              <div class="text">
                <p class="large">우리 둘만 아는 이야기</p>
                <p class="small">쉿 비밀펜</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}
