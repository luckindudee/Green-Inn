$(function() {
	  $("#destinat").selectmenu();
});

$(function() {
	  $("#time").selectmenu();
});

$(function() {
	$("#slider-range").slider({
		range:true,
		min: 249500,
		max: 750000,
		values: [ 75, 300 ],
		slide: function( event, ui ){
			$("#amount").val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	
	$("#amount").val(" £" + $(" #slider-range").slider( "values", 0 ) + " - £" + $("#slider-range").slider( "values", 1 ) );
});


$(function() {
	$( "#Search" ).on("click", function(){
		
		var propType = $("#destination").val();
		var date =  $("#time").val();
		var propAct = $("#activities").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( propType == data.properties[i].destination) || (propType=="Africa"))
			   if (( date == data.properties[i].added.month) || (date=="Anytime"))
			   if (( propAct == data.properties[i].activities) || (propAct=="Hiking"))
			   if (( data.properties[i].price >= minPrice && data.properties[i].price <= maxPrice ))
			   {
				   {
					   {
						   {
							   output+="<h2><li>" + "£" + data.properties[i].price +"</li></h2>" +"<h2><li>" + "£" + data.properties[i].price +"</li></h2>" + "<img src=" + data.properties[i].picture + ">" + "<p>" + data.properties[i].description + "</p>" + "<button><a href='" + data.properties[i].url + "'>Visit Page</a></button>";
						   } } } } }
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
	});