class Box{
  constructor(x, y){
    var options={
      restitution:0.1,
      density:1,
      friction:1.5,
    }
    this.body=Bodies.rectangle(x,y,25,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    this.visibility = 255
    World.add(world,this.body)

  }
  display(){
    console.log(this.body.speed);

    if(this.body.speed<3){
          
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();

     }else{

      World.remove(world,this.body);

      push();
      this.visibility = this.visibility-5
      tint(255,this.visibility);      
      rect(0,0,30,40);
      pop();
    } 
   }

  
   score()
   {
     if(this.visibility<0&&this.visibility>-100)
     {
       score++
     }
   }
 
   
}
