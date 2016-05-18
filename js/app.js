/*
  Please add all Javascript code to this file.
*/

// NPR API Key: kIBQCCCffeYXhxGTvLmokAqDXNYS54wU2ngMpCWv
// Guardian API Key: 695fa638-6cf0-4f26-abb9-21ad316b0b1f

//JB - Use handlebars.js to template articles
//Scott - Make AJAX request to NPR
//Julie - Add second source later
//Ray - Create a 'loading' container
	//While articles.length === 0, show loader - something like that
//Julie - Clicking on article should pop overlay/modal with full article
	//Needs onclick event
//Julie - Should be link in overlay to read more from source
	//Onclick, overlay.show. Overlay is built with handlebars
	//Should be able to close with X button
//JB - User can select news source which repopulates the page
//Scott - Error handling if app cannot load from selected feed
	//On error from AJAX request
//Scott - Clicking on Search icon expands search bar
	//Width = 0 by default. Width = 20%. Add sweet transition here, Scott.
//Julie - Clicking the feedr logo displays default feed (all news sources)
	//Add onclick event here
//Jim - Searching in the bar by article title
	//On keyup, query the loaded articles
//Jim - Add infinite scrolling
	//Load 20 articles by default, load 20 more when bottom of page is hit


