'use strict'

// catch all errors
window.onerror = function (err) {
	// redirect to stackoverflow search page with error in query
	window.location.href = `https://stackoverflow.com/search?q=${err}`
	return false
}