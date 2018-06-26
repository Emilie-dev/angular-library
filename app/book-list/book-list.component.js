// Register `bookList` component, along with its associated controller and template
angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', function BookListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('books/books.json').then(function(response) {

        self.books = response.data;

        });
      }
    ]
  });