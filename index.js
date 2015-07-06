b=$("#branding_header, #main_navigation");
t=$(".ember-view.ticket.section");
if (b.css("display") == "block") 
{
	b.css("display", "none"); 
	t.css("position", "fixed");
}
else 
{
	b.css("display", ""); 
	t.css("position", "");
}
