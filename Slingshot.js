class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1= loadImage("sprites/sling1.png")
        this.sling2= loadImage ("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(64, 29, 1);
            line(pointA.x-25, pointA.y+15, pointB.x+70, pointB.y-50);
            line(pointA.x-25, pointA.y+15, pointB.x+30, pointB.y-40); 
            image(this.sling3,pointA.x-25, pointA.y,10,20)
        }
        image(this.sling1,250,20)
        image(this.sling2,225,20)

    }
    
}