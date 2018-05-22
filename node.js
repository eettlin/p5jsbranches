


function Node(branchId, nodeId, angle, dist, loc) {
  this.brId = branchId;
  this.id = nodeId;
  this.width = 2;
  this.dist = dist;
  this.angle = angle;
  this.loc = loc;
  this.set = false;

  this.update = function(){
    if(this.id !== 0){
      var myBranch = branches[this.brId];
      var myNeighbor = myBranch.nodes[this.id - 1];

      var currentDist = this.loc.dist(myNeighbor.loc);
      if(currentDist < this.dist){
        this.loc.x += cos(this.angle)*5;
        this.loc.y += sin(this.angle)*5;
        this.width +=1;
      }else{
        this.set = true;
      }
    }
    this.render();
  }

  this.render = function(){
    fill(255, 25, 25, 1);
    stroke(255, 225, 225);
    strokeWeight(1.5);
    if(this.id !== 0){
      ellipse(this.loc.x, this.loc.y, this.width, this.width);
      var myBranch = branches[this.brId];
      var myNeighbor = myBranch.nodes[this.id - 1];
      stroke(255, 25,25);
      line(this.loc.x, this.loc.y, myNeighbor.loc.x,  myNeighbor.loc.y)
    }
  }



}
