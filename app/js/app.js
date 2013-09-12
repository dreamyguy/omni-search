// jasmine's first test
function hw() {
    return 'Hello World';
}

// the app!
var omniAppModule = angular.module('omniApp', []);

var engines = [
    { "name":"google", "url":"https://www.google.com/#q=" },
    { "name":"bing", "url":"http://www.bing.com/search?q=" },
    { "name":"twitter", "url":"https://twitter.com/search?q=" },
    { "name":"youtube", "url":"http://www.youtube.com/results?search_query=" },
    { "name":"vimeo", "url":"https://vimeo.com/search?q=" },
    { "name":"flickr", "url":"http://www.flickr.com/search/?q=" },
    { "name":"lastfm", "url":"http://www.last.fm/search?q=" },
    { "name":"soundcloud", "url":"https://soundcloud.com/search?q=" },
    { "name":"grooveshark", "url":"http://grooveshark.com/#!/search?q=" },
    { "name":"stackoverflow", "url":"http://stackoverflow.com/search?q=" }
];

omniAppModule.controller('enginesController', function($scope) {
    $scope.engines = engines;
});

omniAppModule.controller('doSearchController', function($scope, $window) {

    // define the engines
    $scope.engines = engines;

    // render showOnLoad on page load
    $scope.showOnLoad = true;

    // perform search on first engine listed in filtered engines upon submit
    $scope.doSearch = function () {

        // get input value
        var theInput = $scope.searchInput;
        //- console.log(theInput);
        var theQuery = theInput.substr(theInput.indexOf(' ') + 1);
        //- console.log(theQuery);

        // get first word of input value
        function firstWordOnInput() {
            var words = theInput.split(/\b/);
            if (words.length > 0) {
                //- console.log(words[0]);
                return words[0];
            }
        }

        // retrieve the engines
        var theEngines = $scope.engines;

        // filter and match first word of input value to engine name
        var matchedEngineSoGimmeUrl = theEngines.filter(function(element) {
            // if first word on input value matches an engine name, do search
            if (element.name == firstWordOnInput()) {
                //- console.log(element.url);
                $window.location.href = element.url + theQuery;
            }
        });

    };

});
