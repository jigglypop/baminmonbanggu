import styled from "./styled-component.js";

export default class React {
  constructor() {}

  // 시작 함수
  init($target, sementic) {
    // 아우터 만들기
    let $outer = null;
    if (sementic !== undefined) {
      $outer = document.createElement(`${sementic}`);
    } else {
      $outer = document.createElement("div");
    }
    const outerName = String(this.constructor.name);
    $outer.className = outerName;
    this.$outer = $outer;
    // $target에 appendChild
    $target.appendChild($outer);
    // 렌더링
    this.render();
    // 스타일링
    this.style();
  }

  // setState
  setState(data) {
    for (let param of Object.keys(data)) {
      this.state[param] = data[param];
    }
    this.render();
    this.style();
  }

  // styled-component
  style() {
    const root = this.$outer.className;
    const rootAll = document.querySelectorAll(`.${root}`);
    for (let rootEl of rootAll) {
      styled(rootEl, `.${root}`, this.styled);
    }
  }
}
