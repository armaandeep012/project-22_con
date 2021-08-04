class Rect{
	constructor(x,y,height,width){

		var rect_Options={
			isStatic: true
		}

		this.body = Bodies.rectangle(x,y,height,width, rect_Options);
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		World.add(world, this.body)
	}

	display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(this.x,this.y,this.height,this.width);
        pop();

	}
}