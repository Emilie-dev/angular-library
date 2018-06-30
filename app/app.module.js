'use strict';

// Define the `libraryApp` module
angular.module('libraryApp', [
  // ...which depends on modules
  'ngRoute',
  'bookList',
  'bookDetail'
]);