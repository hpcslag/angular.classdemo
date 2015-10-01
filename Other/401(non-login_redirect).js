angular.module('app').config(function ($httpProvider) {

    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
        var $state;
        $timeout(function () {
          $state = $injector.get('$state');
        });
        
        return {
            'response': function (response) {
                if (response.status === 401) {
                    console.log("Response 401");
                    $state.go('access.login');
                }
                return response || $q.when(response);
            },
            'responseError': function (rejection) {
                if (rejection.status === 401) {
                    console.log("Response Error 401");
                    $state.go('access.login');
                }
                return $q.reject(rejection);
            }
        };
    });
});

//碰到401回傳的頁面，就轉到登入頁面
