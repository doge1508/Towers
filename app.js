const NUM_BLOCKS = 8;

let towers = [];
let grabbedTowerIndex;

window.onload = init;

function init() {
  window.addEventListener("mousedown", handleMD);
  window.addEventListener("mouseup", handleMU);
  window.addEventListener("mousemove", handleMM);
  for (let i = 0; i < 3; i++) {
    towers[i] = new Tower(i);
  }
  for (let i = 0; i < NUM_BLOCKS; i++) {
    towers[0].blocks[i] = new Block(i, NUM_BLOCKS);
  }
}

function handleMD(e) {
  grabbedTowerIndex = Math.floor((3 * e.clientX) / window.innerWidth);
  console.log("grabbed " + grabbedTowerIndex);
}

function handleMU(e) {
  let droppedTowerIndex = Math.floor((3 * e.clientX) / window.innerWidth);
  let block = towers[grabbedTowerIndex].getTopBlock();
  console.log(block);
  if (!block) {
    console.log("no block");
    return;
  }
  block.drop(
    towers[droppedTowerIndex].getEmptyBlockPosition(),
    droppedTowerIndex
  );
  towers[droppedTowerIndex].dropBlock(block);
  console.log("dropped " + droppedTowerIndex);
}

function handleMM(e) {
  //towers[0].blocks[0].move(e.clientX, e.clientY);
}
