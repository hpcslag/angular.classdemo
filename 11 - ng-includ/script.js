angular.module('app', []);

function ctrl($scope){
	$scope.templates = [
		{name: '1.html',url: '1.html'},
		{name: '2.html',url: '2.html'}
	];

	$scope.template = $scope.templates[0];

}