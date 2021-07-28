// ==UserScript==
// @name        fix retroflix.club images
// @namespace   Violentmonkey Scripts
// @match       https://retroflix.club/*
// @grant       none
// @version     1.1
// @author      Matthew Jorgensen
// @downloadURL https://git.sr.ht/~mjorgensen/userscripts/blob/master/retroflix.club/fix-images.user.js
// @description 4/27/2021, 9:24:18 PM
// ==/UserScript==

(function() {
	var css = [
		"img {",
		"    max-width: 100%;",
		"}",
		"",
		"img.movie-poster {",
		"    max-width: unset;",
		"}",
		"img.bonus-formula {",
		"    background-color: white;",
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
	
	img = document.getElementsByTagName("img");
	console.log(img)
	for (i in img) {
		if (img[i].height == 300) {
			img[i].classList.add("movie-poster");
		}
		if (img[i].src == origin+"/pic/bonusformulac.png") {
			img[i].classList.add("bonus-formula")
		}
	}
})();
