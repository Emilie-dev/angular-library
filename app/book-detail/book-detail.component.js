// Register `bookDetail` component, along with its associated controller and template
angular.
  module('bookDetail').
  component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$http', '$routeParams',
      function bookDetailController($http, $routeParams) {
        var self = this;

        /*To construct the URL for the HTTP request, we use $routeParams.bookId, 
        which is extracted from the current route by the $route service.*/
        $http.get('books/' + $routeParams.bookId + '.json').then(function(response) {

          self.book = response.data;

        });
      }
    ]
  });