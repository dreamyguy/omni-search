// omni-search - v0.0.2 - 2013-09-13 16:09:45

function hw(){return"Hello World"}var engines=[{name:"google",url:"https://www.google.com/#q="},{name:"bing",url:"http://www.bing.com/search?q="},{name:"twitter",url:"https://twitter.com/search?q="},{name:"youtube",url:"http://www.youtube.com/results?search_query="},{name:"vimeo",url:"https://vimeo.com/search?q="},{name:"flickr",url:"http://www.flickr.com/search/?q="},{name:"lastfm",url:"http://www.last.fm/search?q="},{name:"soundcloud",url:"https://soundcloud.com/search?q="},{name:"grooveshark",url:"http://grooveshark.com/#!/search?q="},{name:"stackoverflow",url:"http://stackoverflow.com/search?q="}],omniAppModule=angular.module("omniApp",[]);omniAppModule.controller("enginesController",function($scope){$scope.engines=engines}),omniAppModule.controller("doSearchController",function($scope,$window){$scope.engines=engines,$scope.showOnLoad=!0,$scope.doSearch=function(){function firstWordOnInput(){var words=theInput.split(/\b/);return words.length>0?words[0]:void 0}var theInput=$scope.searchInput,theQuery=theInput.substr(theInput.indexOf(" ")+1),theEngines=$scope.engines;theEngines.filter(function(element){element.name==firstWordOnInput()&&($window.location.href=element.url+theQuery)})}});