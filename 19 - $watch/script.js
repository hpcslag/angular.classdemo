function ctrl($scope){
	$scope.$watch('test',function(newValue,oldValue){
		console.log("this is New Value: "+newValue+" oldValue: "+oldValue);
		//提供了舊值與新值的改變
	});
}