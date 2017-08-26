var color = 0;
var frame = 0;
var timer = 0.5;
var isJanusWeb = (typeof elation != 'undefined');
var bool = 1;

room.update = function(dt)
{
	if (bool == 1)
	{
		for (obj in room.objects){
			//room.objects[obj].pos = translate(translate(player.pos,room.objects[obj].pos),player.dir);
			room.objects[obj].scale = V(Math.sin(performance.now() / 1000));
			//room.objects[obj].col = scalarMultiply(GetRaveColor(Math.round(frame * 0.5) % 6),1);
		}	
		bool = 1;
	}
	timer = (timer + dt * 0.001)
}