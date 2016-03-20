$(document).ready(function()
{
	$('#message').focus();
	
	$("#post-btn").click(function(){

		var text = $("#message").val();

		 $("#wall").append("<div>" + "<img src='http://www.scass.ae/en/About1/PublishingImages/Pages/staff/nophoto.jpg'>" + text  + "</div>");

		  $("img").width(90);
		  
		  
	});
	
	// YOUR CODE GOES HERE
});
