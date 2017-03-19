$(document).ready(function(){

	var allQuotes = $("blockquote");
	var currentQuote = 0;
	var allDesigns = $(".designs")
	var currentDesign = 0;

  function changeQuote(){

		$(allQuotes[currentQuote]).fadeOut(500, function(){
      if (currentQuote == allQuotes.length - 1) {
        currentQuote = 0;
      } else {
        currentQuote++;
      }
      $(allQuotes[currentQuote]).fadeIn(500);
    });
  }
var quoteTimer = setInterval(changeQuote, 3000);

	function changeDesign(){

		$(allDesigns[currentDesign]).fadeOut(500, function(){
			if (currentDesign == allDesigns.length - 1) {
				currentDesign = 0;
			} else {
				currentDesign++;
			}
			$(allDesigns[currentDesign]).fadeIn(500);
		});
	}
	var designTimer = setInterval(changeDesign, 3000);


});
