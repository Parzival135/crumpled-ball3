class Launcher{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.01
     }
     this.bodyA=bodyA;
     this.pointB=pointB;
     this.launcher=Constraint.create(options)
     World.add(world,this.launcher)

    }
    display(){
        if(this.launcher.bodyA){
            var ptA=this.bodyA.position;
            var ptB=this.pointB;
            strokeWeight(4);
            line(ptA.x,ptA.y,ptB.x,ptB.y)
        }
    }
    fly(){
        this.launcher.bodyA=null;
        
    }
    attach(body){
        this.launcher.bodyA=body;
    }
}
