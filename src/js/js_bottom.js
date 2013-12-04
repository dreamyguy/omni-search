var engines = [ {
    name: "amazon",
    url: "http://www.amazon.com/s/?field-keywords="
}, {
    name: "bbc",
    url: "http://www.bbc.co.uk/search/?q="
}, {
    name: "bing",
    url: "http://www.bing.com/search?q="
}, {
    name: "blip",
    url: "http://blip.tv/search?q="
}, {
    name: "cnn",
    url: "http://edition.cnn.com/search/?query="
}, {
    name: "deviantart",
    url: "http://www.deviantart.com/?qh=&section=&global=1&q="
}, {
    name: "digg",
    url: "http://digg.com/search?q="
}, {
    name: "duckduckgo",
    url: "https://duckduckgo.com/?q=london"
}, {
    name: "ebay",
    url: "http://www.ebay.com/sch/i.html?_nkw="
}, {
    name: "engadget",
    url: "http://www.engadget.com/search/?q="
}, {
    name: "flickr",
    url: "http://www.flickr.com/search/?q="
}, {
    name: "google",
    url: "https://www.google.com/#q="
}, {
    name: "grooveshark",
    url: "http://grooveshark.com/#!/search?q="
}, {
    name: "lastfm",
    url: "http://www.last.fm/search?q="
}, {
    name: "linkedin",
    url: "http://www.linkedin.com/vsearch/f?keywords="
}, {
    name: "macrumors",
    url: "http://www.macrumors.com/search?s="
}, {
    name: "mashable",
    url: "http://mashable.com/search/?q="
}, {
    name: "nationalgeographic",
    url: "http://www.nationalgeographic.com/search/?search="
}, {
    name: "nytimes",
    url: "http://query.nytimes.com/search/sitesearch/#/"
}, {
    name: "reddit",
    url: "http://www.reddit.com/search?q="
}, {
    name: "reuters",
    url: "http://www.reuters.com/search?blob="
}, {
    name: "songkick",
    url: "https://www.songkick.com/search?query="
}, {
    name: "soundcloud",
    url: "https://soundcloud.com/search?q="
}, {
    name: "squidoo",
    url: "http://www.squidoo.com/search/results?q="
}, {
    name: "stackoverflow",
    url: "http://stackoverflow.com/search?q="
}, {
    name: "startsiden",
    url: "http://www.startsiden.no/sok/?q="
}, {
    name: "stay",
    url: "http://www.stay.com/search/?s="
}, {
    name: "twitter",
    url: "https://twitter.com/search?q="
}, {
    name: "vimeo",
    url: "https://vimeo.com/search?q="
}, {
    name: "wikipedia",
    url: "http://en.wikipedia.org/w/index.php?search="
}, {
    name: "youtube",
    url: "http://www.youtube.com/results?search_query="
} ];

function hw() {
    return "Hello World";
}

var omniAppModule = angular.module("omniApp", []);

omniAppModule.controller("enginesController", function($scope) {
    $scope.engines = engines;
});

omniAppModule.controller("doSearchController", function($scope, $window) {
    $scope.engines = engines;
    $scope.showOnLoad = true;
    $scope.doSearch = function() {
        var theInput = $scope.searchInput;
        var theQuery = theInput.substr(theInput.indexOf(" ") + 1);
        function firstWordOnInput() {
            var words = theInput.split(/\b/);
            if (words.length > 0) {
                return words[0];
            }
        }
        var theEngines = $scope.engines;
        var matchedEngineSoGimmeUrl = theEngines.filter(function(element) {
            if (element.name == firstWordOnInput()) {
                $window.location.href = element.url + theQuery;
            }
        });
    };
});