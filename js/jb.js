var MyApp = {};

// *** sample story object ***
MyApp.story = {
  title: "Report Says Trade Deal Would Boost U.S. Economy, But Opponents Say No",
  date: "Thu, 19 May 2016 07:00:00 -0400",
  blurb: "If Congress were to approve the TransPacific Partn…eport by the U.S. International Trade Commission.",
  fullStory: "If Congress were to approve the Trans-Pacific Part…to trade deals as disasters. [Copyright 2016 NPR]",
  link: "http://n.pr/1quiNVg"};

// *** compile using handlebars ***
MyApp.compileResponse = function (title, date, blurb, fullStory, link) {
  var source = $('#articleTemplate').html();
  var template = Handlebars.compile(source);
  return template({title: title, date: date, blurb: blurb, fullStory: fullStory, link: link});
};

// *** pass story object into compileResponse function ***
MyApp.handleStory = function(story) {
  $('#templatedArticle').html(MyApp.compileResponse(story.title, story.date, story.blurb, story.fullStory, story.link));
};

MyApp.handleStory(MyApp.story);
