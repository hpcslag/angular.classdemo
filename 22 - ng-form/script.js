function ctrl ($scope) {
	$scope.keys = [];
	//add default
	$scope.keys.push({name:'eric',age:22});
	$scope.add = function(){
		$scope.keys.push({name: '',age:null});
	}
	$scope.submit = function(){
		console.log($scope.keys);
	}
}