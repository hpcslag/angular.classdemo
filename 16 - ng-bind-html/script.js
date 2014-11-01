var app = angular.module('app', ['ngSanitize']);
//定義angularjs其他模組

app.controller('ctrl', function($scope) {
    $scope.html = '<img src="http://angularjs.org/img/AngularJS-large.png" />';   
});
