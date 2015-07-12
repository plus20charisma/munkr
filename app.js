/**
 * Created by plus on 7/12/15.
 */
var app = angular.module('munkkit', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello World!';
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 42},
      {title: 'post 3', upvotes: 534},
      {title: 'post 4', upvotes: 2},
      {title: 'post 5', upvotes: 66},
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.link = '';
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);