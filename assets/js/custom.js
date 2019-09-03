(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

		
})(jQuery);

function copyToClipboard() {
	var copyText = document.getElementById("copy-email");
	var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
	
	var tooltip = document.getElementById("emailTooltip");
	tooltip.innerHTML = "✔ Copied " + textArea.value;
  }
  
  function outFunc() {
	var tooltip = document.getElementById("emailTooltip");
	tooltip.innerHTML = "Copy to clipboard";
  }