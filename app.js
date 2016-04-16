var app = angular.module('munkr', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl'
      })

      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/templates/posts.html',
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
}]);

app.factory('posts', [function(){
  var p = {
    posts: [
      {title: 'Google', upvotes: 5, link: 'http://google.com'},
      {title: 'Facebook', upvotes: 42, link: 'http://facebook.com'},
      {title: 'Tumblr', upvotes: 534, link: 'http://tumblr.com'},
      {title: 'Quora', upvotes: 2, link: 'http://quora.com'},
      {title: 'Instagram', upvotes: 66, link: 'http://instagram.com'}
    ]
  };
  return p;
}]);