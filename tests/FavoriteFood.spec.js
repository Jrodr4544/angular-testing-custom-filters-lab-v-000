describe('Favorite Food Filter', function () {
	var $controller, FavoriteFood;
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
    }
  ];

	// beforeEach(module('app'));

	beforeEach(function(){
    module.apply('app');

    inject(function($injector){
      filter = $injector.get('$filter')('FavoriteFood');
    });
  });

  it('should filter on favorite food', function() {
    // var result = $filter('FavoriteFood')('sushi', people)
    expect(filter(people, 'sushi')).toBe('sushi');
  })
	
});
