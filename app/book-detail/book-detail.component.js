angular.
  module('bookDetail').
  component('bookDetail', {
    template: 'Detail view for <span>{{$ctrl.bookId}}</span>',
    controller: ['$routeParams',
      function bookDetailController($routeParams) {
        this.bookId = $routeParams.bookId;
      }
    ]
  });