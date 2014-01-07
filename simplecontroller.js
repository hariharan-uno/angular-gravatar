var grApp = angular.module('grApp',[]);
grApp.controller('SimpleController', function($scope) {
    $scope.fetchImage = function () {
	$scope.HASH = MD5($scope.email)
    };
});