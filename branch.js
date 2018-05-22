


function Branch(id, loc) {
  this.brId = id;
  this.loc = createVector(loc.x, loc.y);
  this.nodes = [];
  this.set = false;


  this.update = function(){
    if(this.nodes.length === 0){
      this.addNode();
      this.nodes[0].set = true;
    }else if(this.nodes[this.nodes.length-1].set){
      this.addNode();
    }
    this.render();
  }

  this.render = function(){
    for(var i = 0; i < this.nodes.length;i++){
      this.nodes[i].update();
    }
  }



  this.addNode = function(){

    var id = this.nodes.length;
    // get the angle from the last node and choose variation
    var angle, loc;
    // get random distance
    var dist = random(30, 100);
    // all branch will start with this diam
    var diam = 12;
    if(this.nodes.length === 0){
      if(this.id === 0){
        angle = random(-PI/2)-PI/4;

        loc = createVector(this.loc.x, this.loc.y);
      }else{
        angle = random(-PI/2)-PI/4;
        loc = createVector(this.loc.x, this.loc.y);
      }
      console.log(angle);
    }else{
      angle = this.nodes[this.nodes.length - 1].angle + random(-.5, .5);
      //get the location of the last node in the array
      var previousLoc = this.nodes[this.nodes.length-1].loc;
      //var newX = previousLoc.x;// + cos(angle)*dist;
      //var newY = previousLoc.y;// + sin(angle)*dist;
      loc = createVector(previousLoc.x,previousLoc.y);
    }
    if(!this.isComplete()){
      this.nodes.push(new Node(this.brId, id, angle, dist, loc));
    }

  }

  this.isComplete = function(){
    // find the location of the last nodes
    if(this.nodes.length >0){
      var lastLoc = this.nodes[this.nodes.length-1].loc;
      // if the last node is out of bounds: set = true
      if(lastLoc.x > width ||
        lastLoc.x < 0 ||
        lastLoc.y > height ||
        lastLoc.y < 0
      ){ this.set = true;
        return this.set;
      }else{
        return false;
      }

    }

  }

}
