
$(function(){

  var apiString = "http://content.guardianapis.com/search?api-key=695fa638-6cf0-4f26-abb9-21ad316b0b1f";

  $.ready(isRedirectedURI())

    function isRedirectedURI() {
          debugger;
    $.ajax({
          url: apiString,
          method: "GET",
          dataType: "json",
          success: function(data){
            handleResponseSuccess(data)
          }
        })
      }

    function handleResponseSuccess(data){
      console.log(data);
      var title = data.response.results.webTitle;
      var date = data.response.results.webPublicationDate;
    }

})




