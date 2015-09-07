



chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        var song = new Audio('src/deathgrips-esque.mp3');
        song.play();

		$('*').css('fontSize','large');
    $('*').css('background-color', 'black');
		$('*').css('color', 'lime');
		$('*').css('font-family', 'Courier New');

        // Walk through all the nodes to get all text nodes.
        // Thanks to: http://stackoverflow.com/a/5904945
        // and also: http://stackoverflow.com/a/9452386
        var textNodes = [];
        (function walkNodeForText(node) {
            if (node) {
                node = node.firstChild;
                while (node != null) {
                    switch (node.nodeType) {
                        // Recurse into elements, documents, and document fragments
                        case 1:
                        case 9:
                        case 11:
                            walkNodeForText(node);
                            break;
                        // Add text nodes to the list of elements we want to modify
                        case 3:
                            textNodes.push(node);
                            break;
                    }

                    node = node.nextSibling;
                }
            }
        })(document.body);

        textNodes.forEach(function(currentVal, index, array) {
            // replace all case-insensitive occurences of 'cloud' with 'butt'.
            currentVal.nodeValue = currentVal.nodeValue.replace(/images/gi, "CHECK OUT MAH MIXTAPE FAM ");
            currentVal.nodeValue = currentVal.nodeValue.replace(/search/gi, "CHECK OUT MAH MIXTAPE FAM ");
            currentVal.nodeValue = currentVal.nodeValue.replace(/ /gi, "CHECK OUT MAH MIXTAPE FAM ");
        });

    }
    }, 10);
});
