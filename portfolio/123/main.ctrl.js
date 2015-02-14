// 3) First retrieve the app module, then use the controller function to instantiate a new controller
// 1st param: conroller name
// 2nd param: a function to place controller code
angular.module('app').controller("MainController", function() {

  // 5) capture the controller instance to a variable, then assign all controller variable to this object
  var viewModel = this;
  viewModel.title = 'My TV Show Library';
  viewModel.searchInput = '';

  // added object specifying the show details
  viewModel.shows = [
    {
      title: 'Game of Thrones',
      year: 2011,
      favorite: true
    },
    {
      title: 'Walking Dead',
      year: 2010,
      favorite: false
    },
    {
      title: 'Firefly',
      year: 2002,
      favorite: true
    },
    {
      title: 'Banshee',
      year: 2013,
      favorite: true
    },
    {
      title: 'Greys Anatomy',
      year: 2005,
      favorite: false
    }
    ];

  // added object specifying the order types available
  viewModel.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Ascending',
        key: 'title',
        reverse: true
    }
  ];
  viewModel.order = viewModel.orders[0];

  viewModel.new = {};
  viewModel.addShow =function() {
    viewModel.shows.push(viewModel.new);
    viewModel.new = {};
  };
});
