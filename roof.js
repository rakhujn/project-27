class roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(400,100,300,10 , options);
		this.width=300;
		this.height=10;
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			// push()
			// translate(groundPos.x, groundPos.y);
			//strokeWeight(4);
			rectMode(CENTER)
			fill(128,128,128)
			rect(pos.x,pos.y,this.width,this.height);
			//pop()
			
	}

}