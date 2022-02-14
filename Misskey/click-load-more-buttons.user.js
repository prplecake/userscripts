// ==UserScript==
// @name        Misskey Autoexpander
// @namespace   Violentmonkey Scripts
// @match       https://mk.jrgnsn.social/
// @grant       none
// @version     1.1
// @author      Matthew Jorgensen
// @downloadURL https://github.com/prplecake/userscripts/blob/master/Misskey/click-load-more-buttons.user.js
// @description Clicks "Load More" buttons inside articles
// ==/UserScript==

function clickLoadMoreButton(elementsArray) {
	for (const [key, value] of Object.entries(elementsArray)) {
		var buttons = value.querySelectorAll("._button");
		buttons.forEach(item => {
			if (item.innerHTML.includes("Load more")){
				item.click();
			}
		});
	}
}
setInterval(function() {
  clickLoadMoreButton(document.getElementsByClassName("article"));
  clickLoadMoreButton(document.getElementsByClassName("reply-to"));
}, 2500);