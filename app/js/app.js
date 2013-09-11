function hw() {
    return 'Hello World';
}

var omniAppModule = angular.module('omniApp', []);

omniAppModule.controller('engineController', function($scope) {
	var engine = {};
	engine.message = 'That all you got?';
	$scope.engine = engine;
});
