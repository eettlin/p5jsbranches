
var node;
var branches = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(20,20,20);
  makeBranch();
}

function draw() {
  background(5, 5, 5,5);
  //  if the last branch in branches is set, make a new branch
  if(branches[branches.length-1].set)makeBranch();
  // render each branch
  for(var i = 0; i < branches.length; i++){
      branches[i].update();
  }
}

function makeBranch(){
  if(branches.length === 0){
    var loc = createVector(width/2, height - 50);
    branches.push(new Branch(0, loc));
  }else{
    // get random branch
    var brIndex = floor(random(branches.length)/2);
    var br = branches[brIndex];
    // get random node
    var ndIndex = floor(random(br.nodes.length));
    var startNode = br.nodes[ndIndex];
    var loc = createVector(startNode.loc.x, startNode.loc.y);
    var id = branches.length;
    branches.push(new Branch(id, loc));
  }
  //console.log(branches.length);
}
