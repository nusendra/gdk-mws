var calc = document.getElementById('calc');
var grid = document.getElementById('grid');
var map = document.getElementById('map');

calc.onclick = gotoCalc;
grid.onclick = gotoGrid;
map.onclick = gotoMap;

function gotoCalc() {
    window.location = '/add2numbers.html';
}

function gotoGrid() {
    window.location = '/grid-optional.html';
}

function gotoMap() {
    window.location = '/map.html';
}