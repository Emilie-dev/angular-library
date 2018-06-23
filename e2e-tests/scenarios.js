'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Library Application', function() {

  describe('bookList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the book list as a user types into the search box', function() {
      var bookList = element.all(by.repeater('book in $ctrl.books'));
      var query = element(by.model('$ctrl.query'));

      expect(bookList.count()).toBe(5);

      query.sendKeys('Informatique');
      expect(bookList.count()).toBe(1);

      query.clear();
      query.sendKeys('Fantasy');
      expect(bookList.count()).toBe(2);
    });

  });

});