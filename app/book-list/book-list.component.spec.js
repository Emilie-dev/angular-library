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

    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('books/books.json')
                  .respond([{name: 'Croc-Blanc'}, {name: 'L\'île au trésor'}]);

      ctrl = $componentController('bookList');
    }));

  });

});