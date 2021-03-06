'use strict';

var startingLine,
startingStation,
endingLine,
endingStation;

var lines = {
  green:["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

var numberStops = function(startingLine, startingStation, endingLine, endingStation){
  if(startingLine === endingLine){
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation));
  }else{
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('park st')) +
           Math.abs(lines[endingLine].indexOf('park st') - lines[endingLine].indexOf(endingStation));
  }
}
console.log('davis/alewife 1 stop = ' + numberStops('red', 'alewife', 'red', 'davis'));
