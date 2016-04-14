var app = angular.module('munkr', []);

app.controller('MainCtrl', [

  '$scope',
  'posts',

  function($scope, posts) {

    $scope.posts = posts.posts;

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


app.factory('posts', [function(){
  var p = {
    posts: [
      {title: 'post 1', upvotes: 5, link: 'http://google.com'},
      {title: 'post 2', upvotes: 42},
      {title: 'post 3', upvotes: 534},
      {title: 'post 4', upvotes: 2},
      {title: 'post 5', upvotes: 66},
    ]
  };
  return p;
}])