class Stones{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("black");
        fill("green");
        ellipseMode(RADIUS);
        ellipse(0,0,10);
        pop();
    
    }
    
    }