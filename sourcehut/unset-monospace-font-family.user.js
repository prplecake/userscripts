// ==UserScript==
// @name        sr.ht monospace font unset
// @namespace   Violentmonkey Scripts
// @match       https://*.sr.ht/*
// @grant       none
// @version     1.2
// @homepageURL	https://github.com/prplecake/userscripts/blob/master/sourcehut/unset-monospace-font-family.user.js
// @downloadURL	https://github.com/prplecake/userscripts/blob/master/sourcehut/unset-monospace-font-family.user.js
// @author      Matthew Jorgensen
// @description 4/27/2021, 9:28:13 PM
// ==/UserScript==

(function() {
	var css = [
		"code, kbd, pre, samp {",
		"    font-family: monospace;",
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