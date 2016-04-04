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