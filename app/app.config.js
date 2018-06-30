angular.
  module('libraryApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      /* We use the $routeProvider.when() and $routeProvider.otherwise() methods 
      to define our application routes.
      */
      $routeProvider.
        when('/books', {
          template: '<book-list></book-list>'
        }).
        when('/books/:bookId', {
          template: '<book-detail></book-detail>'
        }).
        otherwise('/books');
    }
  ]);