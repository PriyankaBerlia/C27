class Ball{   
    constructor(x,r){
        var options={
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        }

        this.x = x;
        //this.y =y;
        this.r = r;
        this.body=Bodies.circle(this.x,500,(this.r)/2,options);
        //this.radius=r;
        this.y = 500;
        World.add(world,this.body);
        
    
    }
    display(){

        var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
            fill(153, 153, 255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			circle(0,0,this.r*2);
			pop()
       
    } 
     
    }