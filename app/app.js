'use strict';

// Define the 'libraryApp' module
var libraryApp = angular.module('libraryApp', []);

// Define the 'BookListController' controller on the 'libraryApp' module
libraryApp.controller('BookListController', function BookListController($scope) {
	$scope.books = [
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
});