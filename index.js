//We're ready!
$(document).on("ready",function()
{
	d='<div id="zenzenButton" style="position: absolute; z-index:999; font-size: 20px; top: 10px; right: 150px; cursor: pointer;">F</div>';
	$("body").append(d);
	$("#zenzenButton").on("click", function()
	{
		b=$("#branding_header, #main_navigation");
		t=$(".ember-view.ticket.section");
		z=$("#zenzenButton");

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
			z.css("right", "150px");
			z.css("top", "10px");
		}
	});
});
