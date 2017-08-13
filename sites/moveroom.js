room.onLoad = function()
{
	for (obj in room.objects)
	{
		obj.pos = Vector(player.pos) + Vector(obj.pos)
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

