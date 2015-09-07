chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        //BLARE HORNS UNTIL THEY CLICK MIXTAPE
        
       //var audio = new Audio('deathgripsesque.mp3');
	   //audio.play();
	   		var pepeIs = ["https://potatogamers.net/forums/data/MetaMirrorCache/static.fjcdn.com_pictures_Rare_pepe_thread_post_a_rare_of_favorite_pepes_any_and_228afe_5509854.jpg","https://i.warosu.org/data/ic/img/0020/76/1432482958915.jpg","https://pp.vk.me/c624316/v624316971/e52f/ktlNJZzAQ5I.jpg","http://orig08.deviantart.net/a0e2/f/2015/168/0/5/pepe_keeps_it_rare__by_fabulousninji-d8xnq1r.jpg","http://i0.kym-cdn.com/photos/images/newsfeed/000/937/863/4d8.jpg","http://i.ytimg.com/vi/7JyDJzawiU8/hqdefault.jpg","https://yt3.ggpht.com/-g5wn-_03l3E/AAAAAAAAAAI/AAAAAAAAAAA/TXNp1rlhStc/s900-c-k-no/photo.jpg","http://41.media.tumblr.com/9c1f4d1b3455787648fe8437a2283974/tumblr_inline_nt0e1kg1ra1svka38_500.jpg","https://yt3.ggpht.com/-ZBLffL0OVjU/AAAAAAAAAAI/AAAAAAAAAAA/gUbhKb6-s2k/s900-c-k-no/photo.jpg"];
	    var images = document.getElementsByTagName("img");
		for(var i = 0; i < images.length; i++){
			images[i].src = pepeIs[Math.floor((Math.random()*pepeIs.length))]; 
		}
		

		
	//	$('img').attr("src","https://potatogamers.net/forums/data/MetaMirrorCache/static.fjcdn.com_pictures_Rare_pepe_thread_post_a_rare_of_favorite_pepes_any_and_228afe_5509854.jpg");
		
        $('*').css('background-color','#280000 ');
		$('*').css('fontSize','large');
		$('*').css('fontFamily','Comic sans');
		$('*').css('font-color','red');

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
            currentVal.nodeValue = currentVal.nodeValue.replace(/images/gi, "is this a rare pepe?");
            currentVal.nodeValue = currentVal.nodeValue.replace(/search/gi, "is this a rare pepe? ");
            currentVal.nodeValue = currentVal.nodeValue.replace(/ /gi, "is this a rare pepe? ");
        });

    }
    }, 10);
});