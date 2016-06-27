# height-aligner
Align html elements with an equal height

Version 1.0

Only working with Jquery dependency. (future release with a vanilla javascript version)

Example of use:

Simply put the class "height-align" on the elements you want to have the same height on the page. It will automatically resize after the pageload.

``` 
$(document).ready(function () {
	setTimeout(function () {
		var uniformHeight = 0, itemHeight = 0;
		$(".height-align").each(function (index) {
			itemHeight = $(this).height();
			if (itemHeight > uniformHeight) {
				uniformHeight = itemHeight;
			}
		});
		$(".height-align").height(uniformHeight);
	}, 0);
});
``` 
