$(document).ready(function(){

	$(".search-button").on("click",function(){
		$("#image-container").html("");
		var gifSubject = $("input[name='gif-search']").val().trim();
		var limit = $("input[type='number']").val();
		limit++;
		console.log("LImit ", limit);
		
		gifSubject.replace("","+");

		console.log(gifSubject);
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSubject + "&api_key=601abd287bb64af89bfe55b91e55a5be&limit=" + limit;
	        
	         $.ajax({
	          url: queryURL,
	          method: "GET"
	        }).done(function(response) {
	         console.log(response);
	         var img = ""; $('<img/>',
			             {class: 'image',
			               			               
			             })

	         
	         for(var i = 1; i < response.data.length; i++){
	         	var url = response.data[i].images.downsized_large.url;
	         	 img =  $('<img/>',
			             {class: 'image',
			              src: url	               
			             })
	         	// console.log("Url = " + response.data[i].images.downsized_medium.url);
	         	$("#image-container").append(img);
	         }
	        });
	});

});