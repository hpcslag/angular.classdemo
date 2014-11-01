function ctrl($scope){
	$scope.price = 0;
	$scope.action = function(){//進入scope後，設定action為觸發function
		$scope.price = 100;
	};
}