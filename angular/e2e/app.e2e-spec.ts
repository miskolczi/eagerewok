import { browser, by, element } from 'protractor';

describe('EagerEwok Django Backend', () => {

  // beforeEach(() => {});
  // afterEach(() => {});

  it('users page', () => {
  	browser.get('/users');
  	// let tmp = element(by.css('h2')).getText();
   //  expect(tmp).toEqual('Users');
	var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
  });
});
