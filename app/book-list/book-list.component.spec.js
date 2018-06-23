// Unit test the `BookListController` controller separately
describe('bookList', function() {

  // Load the module that contains the `bookList` component before each test
  beforeEach(module('bookList'));

  // Test the controller
  describe('BookListController', function() {
  	var ctrl;

   	beforeEach(inject(function($componentController) {
      ctrl = $componentController('bookList');
    }));

    it('should create a `books` model with 5 books', function() {
      expect(ctrl.books.length).toBe(5);
    });

    it('should set a default value for the `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});