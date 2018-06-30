'use strict';

// Define the `libraryApp` module
angular.module('libraryApp', [
  // ...which depends on the `bookList` module
  'bookList',
  'ngRoute'
]);