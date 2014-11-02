angular.module('app', []);

angular.module('app')
.controller('ctrl', function($scope, $log) {

  $scope.save = function() {
    $log.log($scope.user.email);
  };

});