class Rope{
constructor(bodyF,bodyL,xOffset){
    this.xOffset = xOffset;
    this.yOffset = 0;
    var options = {
        stiffness : 1.0,
        length : 180,
        bodyA : bodyL,
        bodyB : bodyF,
        pointB : {x : this.xOffset, y: this.yOffset}
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);

}

display(){
    var pp = this.rope.bodyB.position.x + this.xOffset;
    stroke("white");
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,pp,this.rope.bodyB.position.y)
}


}