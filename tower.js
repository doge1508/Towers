class Tower {
  constructor(position) {
    this.blocks = [];
    this.position = position;
    this.el = document.createElement("div");
    let left = (1/6 + 1/3 * position) * 100 - 1;
    this.el.style = `position: absolute; height: 96%; width: 2%; left: ${left}%; top: 4%; background-color: saddlebrown; `;
    document.body.appendChild(this.el);
  }

  getTopBlockPosition() {
    if (!this.blocks.length) {
      return -1;
    }
    return this.blocks[this.blocks.length - 1].position;
  }

  getEmptyBlockPosition() {
    return this.getTopBlockPosition() + 1;
  }

  getTopBlock() {
    return this.blocks.pop();
  }

  dropBlock(block) {
    this.blocks.push(block);
  }

  draw() {}
}
