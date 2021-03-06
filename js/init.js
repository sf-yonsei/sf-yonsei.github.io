(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(".event-date").each(function() {
	  var date = $(this).text();
	  var relative = moment(date).fromNow();
	  var absolute = moment(date).format("LLLL");

	  $(this).html(absolute + " <span class='grey-text'>" + relative + "</span>");
	})

	$(".event-address").each(function() {
	  var address = $(this).text();

	  $(this).html("<a href='http://maps.google.com/?q=" + address + "' target=_blank class='grey-text'>" + address + "</span>");
	})

	$("#young-year").html(new Date().getFullYear() - 20)


  }); // end of document ready
})(jQuery); // end of jQuery name space

