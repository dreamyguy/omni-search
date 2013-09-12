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
        var activeEngine = $scope.filteredEngines;
        if (activeEngine.length > 0) {
            $window.location.href = $scope.filteredEngines[0].url;
        }
    };

});
