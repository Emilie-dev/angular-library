// Register `bookList` component, along with its associated controller and template
angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: function BookListController() {
      this.books = [
        {
           title: 'Harry Potter à l\'école des sorciers',
           author: 'J.K Rowling',
           date: '1997',
           genre: 'Fantasy',
           image: './img/books/harry-potter-a-lecole-des-sorciers.jpg',
           age: 4
         },
         {
           title: 'Croc-Blanc',
           author: 'Jack London',
           date: '1906',
           genre: 'Aventure',
           image: './img/books/croc-blanc.jpg',
           age: 5
         },
         {
           title: 'Détox Plus',
           author: 'Dr. Détox',
           date: '2016',
           genre: 'Diététique',
           image: './img/books/detox-plus.jpg',
           age: 2
         },
         {
           title: 'Harry Potter et la Coupe de feu',
           author: 'J.K Rowling',
           date: '2000',
           genre: 'Fantasy',
           image: './img/books/harry-potter-et-la-coupe-de-feu.jpg',
           age: 3
         },
         {
           title: 'Apprendre AngularJS',
           author: 'A.A Angularis',
           date: '2017',
           genre: 'Informatique',
           image: './img/books/apprendre-angularJS.jpg',
           age: 1
         }
      ];

      this.orderProp = 'age';

    }
  });