// *** sample story object ***
var story = {
  provider: "NPR",
  title: "Report Says Trade Deal Would Boost U.S. Economy, But Opponents Say No",
  date: "Thu, 19 May 2016 07:00:00 -0400",
  blurb: "If Congress were to approve the TransPacific Partn…eport by the U.S. International Trade Commission.",
  fullStory: "If Congress were to approve the Trans-Pacific Part…to trade deals as disasters. [Copyright 2016 NPR]",
  link: "http://n.pr/1quiNVg"};

// *** compile article list using handlebars ***
function compileList (title, source) {
  var source1 = $('#articleList').html();
  var template = Handlebars.compile(source1);
  return template({title: title, source: source});
}

// *** pass story object into compileList function ***
function handleList (story) {
  $('#listedArticles').html(compileList(story.title, story.provider));
}

handleList(story);

// *** compile indiviudal article using handlebars ***
function compileArticle (title, date, blurb, fullStory, link) {
  var source2 = $('#articleTemplate').html();
  var template = Handlebars.compile(source2);
  return template({title: title, date: date, blurb: blurb, fullStory: fullStory, link: link});
}

// *** pass story object into compileArticle function ***
function handleStory (story) {
  $('#templatedArticle').html(compileArticle(story.title, story.date, story.blurb, story.fullStory, story.link));
}

handleStory(story);
