// Test 'BookListController' controller 
describe('BookListController', function() {

  beforeEach(module('libraryApp'));

  it('should create a `books` model with 5 books', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('BookListController', {$scope: scope});

    expect(scope.books.length).toBe(5);
  }));

});