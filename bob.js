class bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.3,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		//this.r=r
		
		this.body=Bodies.circle(x,y, 20, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			// push()
			// translate(paperpos.x, paperpos.y);
			// rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipseMode(RADIUS)
			ellipse(paperpos.x,paperpos.y,20,20);
			//pop()
			
	}

}

