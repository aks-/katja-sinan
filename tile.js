class Tile {
  constructor(
    top = getRandomTop(),
    left = getRandomLeft(),
    area = getRandomArea()
  ) {
	  this.side = Math.sqrt(area);
	  this.top = top;
	  this.left = left;
  }

  get area() {
    return this.area;
  }

	get style () {
		return {
			top: this.top,
			left: this.left,
			width: this.side,
			height: this.side,
			'border-radius': `4px`,
			'border': '2px white solid',
			background: 'red'
		}
	}
}

export default Tile;

const MIN_TILE_SIDE = 10;
function getRandomArea() {
  const side = Math.floor(Math.random() * 100 + MIN_TILE_SIDE);
  return Math.pow(side, 2);
}

function getRandomTop(side) {
  return `calc(${Math.random() * 100}vh - ${MIN_TILE_SIDE}px)`;
}

function getRandomLeft(side) {
  return `calc(${Math.random() * 100}vw - ${MIN_TILE_SIDE}px)`;
}
