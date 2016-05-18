
//NYT API Key: 9110591622f644cb97e319bb627afcdf


var getNPRData = function () {
	var nprUrl = 'http://api.npr.org/query?id=1001&dateType=story&output=JSON&apiKey=MDI0MzcyNjQ4MDE0NjM1MzI4OTM5MWM4NQ000';

	$.ajax({
		url: nprUrl, 
		method: 'GET',
		dataType: 'json',
		error: function(req, err){ console.log('Error: ' + err); },
		success: function(response){
			console.log(response);
			handleNPRResponse(response);
		}
	})

	var handleNPRResponse = function(data) {
		var stories = data.list.story;
		var formattedStories = [];
		stories.forEach(function(elem) {
			var fullStory = "";
			for(var i = 0;i < elem.text.paragraph.length;i++){
				fullStory += elem.text.paragraph[i].$text;
			}
			var story = {
				title: elem.title.$text,
				date: elem.pubDate.$text,
				blurb: elem.teaser.$text,
				fullStory: fullStory,
				link: elem.link[2].$text
			}
			formattedStories.push(story);
		});
		console.log(formattedStories);
	}
}();

$('#search').on('click',function() {
	$('#search').css('width','100px');
})