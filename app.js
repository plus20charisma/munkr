var app = angular.module('munkr', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl'
      })

      .state('posts', {
        url: '/post/:id',
        templateUrl: '/templates/post.html',
        controller: 'PostsCtrl'
      });

  $urlRouterProvider.otherwise('home');

}]);

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
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.link = '';
      $scope.title = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

  }
]);

app.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){

    $scope.post = posts.posts[$stateParams.id];

    $scope.incrementUpvotes = function(comment) {
      comment.upvotes += 1;
    };

    $scope.addComment = function(){
      if($scope.body === '') {return ;}
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };

}]);

app.factory('posts', [function(){
  var p = {
    posts: [
      {title: 'Google', upvotes: 0, link: 'http://google.com', comments: []},
      {title: 'Facebook', upvotes: 0, link: 'http://facebook.com', comments: []},
      {title: 'Tumblr', upvotes:0, link: 'http://tumblr.com', comments: []},
      {title: 'Quora', upvotes: 0, link: 'http://quora.com', comments: []},
      {title: 'Instagram', upvotes: 0, link: 'http://instagram.com', comments: []}
    ]
  };
  return p;
}]);