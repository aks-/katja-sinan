import Tile from './tile'
import css from 'dom-css'
window._Tile = Tile;
window.dom = css

const populateBtn = document.querySelector('.populate')
window.populateBtn = populateBtn;
populateBtn.addEventListener('click', () => {
	console.log(Tile)
	console.log(typeof Tile)
	window._Tile = Tile;
})
