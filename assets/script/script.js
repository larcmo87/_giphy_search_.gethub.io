$(document).ready(function(){

	//search for giphy
	$(".search-button").on("click",function(){
		//clear the images in image-container
		$("#image-container").html("");

		//capture the input search value and number of gifs to return
		var gifSubject = $("input[name='gif-search']").val().trim();
		var limit = $("input[type='number']").val();

		limit++; //Need to increment by 1

		console.log("LImit ", limit);
		
		//replace any spaces with +
		gifSubject.replace("","+");

		console.log(gifSubject);

		//url query
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSubject + "&api_key=601abd287bb64af89bfe55b91e55a5be&limit=" + limit;
	        
	         $.ajax({
	          url: queryURL,
	          method: "GET"
	        }).done(function(response) {
	         console.log(response);

	         //crelate image tag to be appended to image-container
	         var img = ""; $('<img/>',
			             {class: 'image',
			               			               
			             })

	         
	         //loop through the giphy object and write gifs to image-container
	         for(var i = 1; i < response.data.length; i++){
	         	var url = response.data[i].images.downsized_large.url;
	         	 img =  $('<img/>',
			             {class: 'image',
			              src: url //source url              
			             })
	         	//append to image container
	         	$("#image-container").append(img);
	         }
	        });
	});

});