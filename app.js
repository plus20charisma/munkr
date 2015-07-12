/**
 * Created by plus on 7/12/15.
 */
var app = angular.module('munkkit', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello World!';
    }
]);