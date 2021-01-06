class Ground{
    
   
constructor(){
    var options={
        isStatic: true
    }
    this.body=Bodies.rectangle(400,350,200,30,options);
    this.x = 400;
    this.y =350;
    this.w = 200;
    this.h = 30;
    World.add(world,this.body);

}
display(){


    var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
    // rectMode(CENTER);
    // fill(255, 191, 128);
    // noStroke();
    // rect(400,350,200,30);
}
    

}