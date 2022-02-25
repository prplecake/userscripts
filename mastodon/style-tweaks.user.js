// ==UserScript==
// @name        Mastodon Style Tweaks
// @namespace   Violentmonkey Scripts
// @match       https://freeradical.zone
// @grant       none
// @version     1.0
// @downloadURL	https://github.com/prplecake/userscripts/blob/master/mastodon/style-tweaks.user.js
// @author      Matthew Jorgensen
// ==/UserScript==

(function() {
	var css = [
		".status__content {",
		"    font-size: 14px;",
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