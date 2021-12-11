class Block {
  constructor(vPosition, numBlocks) {
    this.vPosition = vPosition;
    this.size = numBlocks - vPosition;
    this.numBlocks = numBlocks;
    this.el = document.createElement("div");
    this.towerNum = 0;
    let run = vPosition / numBlocks / 6;
    this.height = (1 / numBlocks) * 100;
    this.width = 1 / 3 - 2 * run;
    this.top = 100 - this.height * (vPosition + 1);
    this.left = ((1 / 3 - this.width) / 2) * 100;
    this.width *= 100;
    let r = Math.floor(256 * Math.random());
    let g = Math.floor(256 * Math.random());
    let b = Math.floor(256 * Math.random());
    let c = `rgb(${r}, ${g}, ${b})`;
    this.el.style = `position: absolute; height: ${this.height}%; width: ${this.width}%; left: ${this.left}%; top: ${this.top}%; background-color: ${c}; pointer-events: none;`;
    document.body.appendChild(this.el);
  }

  move(x, y) {
    // let left = x / window.innerWidth * 100;
    // let top = y / window.innerHeight * 100;
    // this.el.style.left = `${left}%`;
    // this.el.style.top = `${top}%`;
  }

  drop(vPosition, towerNum) {
    this.vPosition = vPosition;
    this.towerNum = towerNum;
    this.top = 100 - this.height * (vPosition + 1);
    this.left = (towerNum / 3 + (1 / 3 - this.width) / 2) * 100;
    this.el.style.left = `${this.left}%`;
    this.el.style.top = `${this.top}%`;
  }
}
