room.onLoad = function()
{
	for (obj in room.objects)
	{
		obj.pos = Vector(player.pos)
	}
	
	/*
	var group = ['js_image1', 'js_image2', 'js_image3'];
    room.objects["object_js_id_here"].pos = Vector(player.pos);
	for (obj_id in group)
	{
    room.objects[obj_id].pos = Vector(player.pos);
	}
	*/

}

var color = 0;
var frame = 0;
var timer = 0.5;
var isJanusWeb = (typeof elation != 'undefined');

room.update = function(dt)
{
	
	room.objects["kirby"].pos = Vector(player.pos)
	
	
	timer = (timer + dt * 0.001)
	/*
	if (timer > 0.5)
	{
		frame += 1;
		timer = timer % 0.5;
		color = (color + 1) % 6;
		if (room.objects["kirby"])
		{
			room.objects["kirby"].col = scalarMultiply(GetRaveColor(Math.round(frame * 0.5) % 6),1);
		}
		if (room.objects["js_beams_2"])
		{
			if (frame % 4 == 0 || frame % 4 == 2)
			{
				room.objects["js_beams_2"].col = scalarMultiply(GetRaveColor(Math.round(frame * 0.5) % 6),1);
			}
			else
			{
				room.objects["js_beams_2"].col = scalarMultiply(GetRaveColor(Math.round(frame * 0.5) % 6),0.15);
			}
		}
		if (room.objects["js_lights"])
		{
			var lights = room.objects["js_lights"].children;
			for (index = 0; index <= lights.length-1; index ++)
			{
				var object = lights[index];
				object.col = GetRaveColor(Math.round(frame * 0.5) % 6);
			}
		}
		if (isJanusWeb)
		{
			//room.objects['js_paintings'].lighting = false;
			room.objects['js_paintings'].lighting = true;
			room.objects['js_paintings'].col = scalarMultiply(translate(Vector(2,2,2),GetRaveColor(Math.round(frame * 0.5) % 6)),1.0);
		}
	}*/
}