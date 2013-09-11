function hw() {
    return 'Hello World';
}

var omniAppModule = angular.module('omniApp', []);

var engines = [
    {
        "name":"google",
        "url":"https://www.google.com/#q="
    },
    {
        "name":"bing",
        "url":"http://www.bing.com/search?q="
    },
    {
        "name":"twitter",
        "url":"https://twitter.com/search?q="
    },
    {
        "name":"youtube",
        "url":"http://www.youtube.com/results?search_query="
    },
    {
        "name":"vimeo",
        "url":"https://vimeo.com/search?q="
    },
    {
        "name":"flickr",
        "url":"http://www.flickr.com/search/?q="
    },
    {
        "name":"lastfm",
        "url":"http://www.last.fm/search?q="
    },
    {
        "name":"soundcloud",
        "url":"https://soundcloud.com/search?q="
    },
    {
        "name":"grooveshark",
        "url":"http://grooveshark.com/#!/search?q="
    },
    {
        "name":"stackoverflow",
        "url":"http://stackoverflow.com/search?q="
    }
];

omniAppModule.controller('enginesController', function($scope) {
	$scope.engines = engines;
});
