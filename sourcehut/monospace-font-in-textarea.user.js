// ==UserScript==
// @name        sr.ht monospace font in textareas
// @namespace   Violentmonkey Scripts
// @match       https://*.sr.ht/*
// @grant       none
// @version     1.2
// @homepageURL https://github.com/prplecake/userscripts/blob/master/sourcehut/monospace-font-in-textarea.user.js
// @downloadURL	https://github.com/prplecake/userscripts/blob/master/sourcehut/monospace-font-in-textarea.user.js
// @author      Matthew Jorgensen
// ==/UserScript==

(function() {
	var css = [
		"textarea, textarea.form-control {",
		"    font-family: monospace;",
		"    font-size: 11pt;",
		"}",
	].join("\n");

	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
})();