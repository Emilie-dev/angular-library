// Unit test the `BookListController` controller separately
describe('bookList', function() {

  // Load the module that contains the `bookList` component before each test
  beforeEach(module('libraryApp'));

  // Test the controller
  describe('BookListController', function() {

    it('should create a `books` model with 5 books', inject(function($componentController) {
      var ctrl = $componentController('bookList');

      expect(ctrl.books.length).toBe(5);
    }));

  });

});