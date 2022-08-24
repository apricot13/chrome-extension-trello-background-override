chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			let trello_root_element = document.getElementById('trello-root');
			trello_root_element.style.backgroundImage = null;
			trello_root_element.style.backgroundColor = "rgb(96 158 135)";
			// ----------------------------------------------------------

			console.log(trello_root_element);

		}
	}, 10);
});