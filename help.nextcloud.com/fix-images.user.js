// ==UserScript==
// @name        fix help.nextcloud.com images
// @namespace   Violentmonkey Scripts
// @match       https://help.nextcloud.com/*
// @grant       none
// @version     1.0
// @author      Matthew Jorgensen
// @homepageURL https://github.com/prplecake/userscripts/blob/master/help.nextcloud.com/fix-images.user.js
// @downloadURL https://github.com/prplecake/userscripts/blob/master/help.nextcloud.com/fix-images.user.js
// @description 2022-03-23 22:23
// ==/UserScript==

(function() {
	var css = [
		"img {",
		"    max-width: unset;",
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
