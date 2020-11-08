class rope{
	constructor(body1,body2, offsetX)
	{
		this.offsetX=offsetX
		//this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:0}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		fill("white")
		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
	}

}