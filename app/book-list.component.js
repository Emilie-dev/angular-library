// Register `bookList` component, along with its associated controller and template
angular.
  module('libraryApp').
  component('bookList', {
    template:
      '<!-- Page Heading -->' +
      '<h1 class="my-4">MES LIVRES</h1>' +
      '<hr>' +
      '<!-- Book List -->' +
      '<div class="row" ng-repeat="book in $ctrl.books" style="padding-bottom: 18px;">' +
        '<div class="col-md-3" >' +
          '<img class="img-fluid rounded mb-3 mb-md-0" src="{{book.image}}" alt="Illustration du livre" style="width: 250px;">' +
        '</div>' +
        '<div class="col-md-5">' +
          '<h3>{{book.title}}</h3>' +
          '<p>{{book.author}}</p>' +
          '<p>{{book.date}}</p>' +
          '<p>{{book.genre}}</p>' +
          '<a class="btn bg-dark" href="#" style="color: #ffffff;">En savoir plus</a>' +
          '<hr>' +
        '</div>' +
      '</div> ' +
      '<!-- /.row -->',
    controller: function BookListController() {
      this.books = [
        {
           title: 'Harry Potter à l\'école des sorciers',
           author: 'J.K Rowling',
           date: '1997',
           genre: 'Fantasy',
           image: 'img/books/harry-potter-a-lecole-des-sorciers.jpg'
         },
         {
           title: 'Croc-Blanc',
           author: 'Jack London',
           date: '1906',
           genre: 'Aventure',
           image: 'img/books/croc-blanc.jpg'
         },
         {
           title: 'Détox Plus',
           author: 'Dr. Détox',
           date: '2016',
           genre: 'Diététique',
           image: 'img/books/detox-plus.jpg'
         },
         {
           title: 'Harry Potter et la Coupe de feu',
           author: 'J.K Rowling',
           date: '2000',
           genre: 'Fantasy',
           image: 'img/books/harry-potter-et-la-coupe-de-feu.jpg'
         },
         {
           title: 'Apprendre AngularJS',
           author: 'A.A Angularis',
           date: '2017',
           genre: 'Informatique',
           image: 'img/books/apprendre-angularJS.jpg'
         }
      ];
    }
  });