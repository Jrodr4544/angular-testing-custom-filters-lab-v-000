describe('Favorite Food Filter', function () {
  var $controller;
 
  beforeEach(module('app'));

  beforeEach(inject(function ($injector){
      $filter = $injector.get('$filter');
  }));

  it('should filter on favorite food', function() {
    var people = [
    {
      name: "John Doe",
      favoriteFood: "pizza"
    },
    {
      name: "Mike None",
      favoriteFood: "sushi"
    },
    {
      name: "Bill Gates",
      favoriteFood: "sushi"
    }];
  
    var result = $filter('favoriteFood')(people, 'sushi');
    
    expect(result.length).toBe(2);
    expect(result[0].favoriteFood).toBe('sushi');
  });

});