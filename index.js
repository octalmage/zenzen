b=$("#branding_header, #main_navigation");
t=$(".ember-view.ticket.section");
d='<div id="zenzenButton" style="position: absolute; z-index:999; font-size: 20px; top: 10px; right: 130px;">F</div>';
$("body").append(d);
z=$("#zenzenButton");
z.on("click", function()
{
	if (b.css("display") == "block") 
	{
		b.css("display", "none"); 
		t.css("position", "fixed");
		z.text("X");
		z.css("right", "10px");
		z.css("top", "5px");
	}
	else 
	{
		b.css("display", ""); 
		t.css("position", "");
		z.text("F");
		z.css("right", "130px");
		z.css("top", "10px");
	}
});
