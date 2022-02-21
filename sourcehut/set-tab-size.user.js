// ==UserScript==
// @name        sr.ht set tab size
// @namespace   Violentmonkey Scripts
// @match       https://*.sr.ht/*
// @grant       none
// @version     1.1
// @downloadURL	https://github.com/prplecake/userscripts/blob/master/sourcehut/set-tab-size.user.js
// @author      Matthew Jorgensen
// ==/UserScript==

(function() {
	var css = [
		"code, kbd, pre, samp {",
		"    tab-size: 4;",
		"    -moz-tab-size: 4;",
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