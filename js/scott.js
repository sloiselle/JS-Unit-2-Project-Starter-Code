
//NYT API Key: 9110591622f644cb97e319bb627afcdf

var Feedr = {};
var formattedStories = [];
//Getting and formatting the feeds

Feedr.getNPRData = function () {
	var nprUrl = 'http://api.npr.org/query?id=1001&dateType=story&output=JSON&apiKey=MDI0MzcyNjQ4MDE0NjM1MzI4OTM5MWM4NQ000';

	$.ajax({
		url: nprUrl, 
		method: 'GET',
		dataType: 'json',
		async: !1,
		error: function(req, err){ 
			$('#main').append("<div class='errorMessage'>Unfortunately, we couldn't get your feed. Please try again later...</div>");
		},
		success: function(data){
			Feedr.handleResponse(data, "NPR")
		}
	})
	return formattedStories;
};

Feedr.getNYTData = function () {
	var nytUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9110591622f644cb97e319bb627afcdf';

	$.ajax({
		url: nytUrl, 
		method: 'GET',
		dataType: 'json',
		async: !1,
		error: function(req, err){ 
			$('#main').append("<div class='errorMessage'>Unfortunately, we couldn't get your feed. Please try again later...</div>");
		},
		success: function(data){
			Feedr.handleResponse(data, "NYT")
		}
	})
	return formattedStories;
};

Feedr.handleResponse = function(data, source) {
			formattedStory = function(id, title, date, blurb, fullStory, link, source){
				this.id = id
				this.title = title
				this.date = date
				this.blurb = blurb
				this.fullStory = fullStory
				this.link = link
				this.source = source;
			};
			if(source === "NPR"){
				var stories = data.list.story;
				stories.forEach(function(elem) {
					var fullStory = "";
					for(var i = 0;i < elem.text.paragraph.length;i++){
						fullStory += elem.text.paragraph[i].$text;
					}
					if(fullStory.length > 500){
						fullStory = fullStory.slice(0,500).trim() + "...";
					}
					var date = new Date(elem.pubDate.$text)
					formattedDate = date.toLocaleString()
					var story = new formattedStory(elem.id, elem.title.$text, formattedDate, elem.teaser.$text, fullStory, elem.link[2].$text, "NPR");
					formattedStories.push(story);
				});
			} else if(source === "NYT"){
				var stories = data.results;
				stories.forEach(function(elem) {
					var date = new Date(elem.created_date);
					formattedDate = date.toLocaleString();
					var story = new formattedStory("n/a", elem.title, formattedDate, elem.abstract, elem.abstract, elem.short_url, "NYT");
					formattedStories.push(story);
					})
			}
		}

//Using the data from the feeds to populate the DOM
Feedr.compileItem = function(story) {
  var source = $('#articleTemplate').html();
  var template = Handlebars.compile(source);
  return template(story);
}

Feedr.initializeFeed = function(source, list) {
  $.each(source, function() {
    list.append(Feedr.compileItem(this));
  });
}


//Styling stuff
$('#search').on('click',function() {
	$('#search').css('width','100px');
})

//Initialization
$(function() {
	var $articleList = $('#main')
	$articleList.children().remove();
	Feedr.initializeFeed(Feedr.getNPRData(), $articleList);
})

//Click Events
$('.newsList').on('click', function(){
		formattedStories = [];
		var $articleList = $('#main')
		$articleList.html("");
		if($(this).text() == 'NPR'){
			Feedr.initializeFeed(Feedr.getNPRData(), $articleList);
			$(this).parent().parent().parent().find('span').text('NPR');
		} else if($(this).text() == 'New York Times'){
			Feedr.initializeFeed(Feedr.getNYTData(), $articleList);
			$(this).parent().parent().parent().find('span').text('NYT');
		} else{
			Feedr.initializeFeed(Feedr.getNPRData(), $articleList);
			Feedr.initializeFeed(Feedr.getNYTData(), $articleList);
			$(this).parent().parent().parent().find('span').text('All');
		}
})

$('body').on('click','article',function() {
	$(this).next().css({"opacity": "1","z-index": "5"});
})

$('body').on('click', '.closePopUp',function() {
	$(this).parent().css({"opacity": "0","z-index": "-1"});
})