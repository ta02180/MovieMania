angular.module('MovieMania', [])

.controller('Controller', ['$scope', function($scope) {

}])

.directive("headerTemplate", function() {
    return {
        templateUrl : "js/templates/header.html"
    };
});

