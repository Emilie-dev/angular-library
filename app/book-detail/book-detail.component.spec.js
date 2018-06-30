describe('bookDetail', function() {

  // Load the module that contains the `bookDetail` component before each test
  beforeEach(module('bookDetail'));

  // Test the controller
  describe('bookDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('books/xyz.json').respond({name: 'book xyz'});

      $routeParams.bookId = 'xyz';

      ctrl = $componentController('bookDetail');
    }));

    it('should fetch the book details', function() {
      expect(ctrl.book).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.book).toEqual({name: 'book xyz'});
    });

  });

});