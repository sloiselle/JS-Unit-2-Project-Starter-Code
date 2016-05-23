

//   var apiString = "http://content.guardianapis.com/search?api-key=695fa638-6cf0-4f26-abb9-21ad316b0b1f";

//   $.ready(isRedirectedURI())

//     function isRedirectedURI() {
//           debugger;
//     $.ajax({
//           url: apiString,
//           method: "GET",
//           dataType: "json",
//           success: function(data){
//             handleResponseSuccess(data)
//           }
//         })
//       }

//     function handleResponseSuccess(data){
//       console.log(data);
//       var title = data.response.results.webTitle;
//       var date = data.response.results.webPublicationDate;
//     }



$('body').on('click','article',function() {
    $(this).next().css({"opacity": "1","z-index": "5"});
})

$('body').on('click', '.closePopUp',function() {
    $(this).parent().css({"opacity": "0","z-index": "-1"});
})

$('#feedr-logo').on('click', function(){
	var $articleList = $('#main')
	$articleList.html("");
	Feedr.initializeFeed(Feedr.getNPRData(), $articleList);
	Feedr.initializeFeed(Feedr.getNYTData(), $articleList);
	$(this).parent().parent().parent().find('span').text('All');
});
