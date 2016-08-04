//页面屏蔽
(function() {
	function stop() {
		return false;
	}
	document.oncontextmenu = stop;
	$(document).on('keydown', function(event) {
		if(event.keyCode == 123 || event.ctrlKey && event.keyCode == 85||event.ctrlKey && event.keyCode == 83) { //屏蔽 F12 和ctrl+u
			event.keyCode = 0;
			event.returnValue = false;
			return false;
		}
	});
})()