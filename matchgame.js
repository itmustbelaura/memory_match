$(document).ready(function () {
  function getRandomTile() {
    var colors = ["red", "green", "blue", "yellow"];
    var randomColor = Math.floor(Math.random() * 3) + 1;
    return colors[randomColor];

  }
  var grid = [];
  for (var i = 0; i < 4; i++) {

    var tile = getRandomTile();
    grid.push(tile);
  }
  var randomGrid = [];
  for (var i = 0; i < 8; i++) {
    randomGrid[i] = 0;
    var randomPosition = Math.floor(Math.random()*7) + 1;
    if(!randomGrid[randomPosition] && i < 4){
      randomGrid[randomPosition] = grid[i];
    }
  }
  console.log(randomGrid);
});