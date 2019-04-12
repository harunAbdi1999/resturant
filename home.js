
	


$.ajax({
	type: "GET",
 	url: "https://api.nasa.gov/planetary/apod?api_key=sT6fiSBawT90U3159DOTiXJuDIeMLzuRP6f0YRs9",
success: function(data){
	$('body').css('background-image', 'url('+data.hdurl+')');
} ,
error: function(jqXHR,textStatus,error){ 
	alert("failure");}
});
