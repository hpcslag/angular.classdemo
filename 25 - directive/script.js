var app = angular.module('app',[]);

app.controller('ctrl',function ctrl($scope){
	$scope.name ="Hello";
	$scope.look = true; //如果ng-look=" "的值是 look 就是 ture
});

//建立一個名稱為ngLook的directive
app.directive('ngLook',function(){
//ngLook 大寫了話才能夠在屬性使用 ng-look, 如果沒有大寫，會變成 nglook=""
	return {
		replace: true,
		restrict: 'A',
		/*
			‘A’ – Attribute (You want to use your directive as <div rating>)
			‘E’ – Element (Use it as <rating>)
			‘C’ – Class. (Use it like <div class=”rating”>)
			‘M’ – Comment (Use it like <!– directive: rating –>
			
			directive:
			A(屬性)
			E(元素)
			C(類別)
			M(註解)
		*/
		link: function($scope,$element,$attributes){
			var expr = $attributes.ngLook;   
      		$element.css('color', $scope[expr] ? 'blue' : '');
		}
	};
});