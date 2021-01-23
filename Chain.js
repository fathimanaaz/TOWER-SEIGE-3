class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 15,
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }
     
    display(){
        push();
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("#442513");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}