'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Library Application', function() {

  describe('bookList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    // Search box e2e test
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

    // Drop-down menu (filter) e2e test
    it('should be possible to control book order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var titleOption = orderSelect.element(by.css('option[value="title"]'));
      var bookTitleColumn = element.all(by.repeater('book in $ctrl.books').column('book.title'));

      function getTitles() {
        return bookTitleColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('Harry');   // Let's narrow the dataset to make the assertions shorter

      expect(getTitles()).toEqual([
        'Harry Potter et la Coupe de feu',
        'Harry Potter à l\'école des sorciers'
      ]);

      titleOption.click();

      expect(getTitles()).toEqual([
        'Harry Potter et la Coupe de feu',
        'Harry Potter à l\'école des sorciers'
      ]);

    });

  }); 

});