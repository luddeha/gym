app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/welcome.html'
      }).
      when('/exercises/add', {
        templateUrl: 'templates/add_exercise.html',
        controller: 'ExercisesCtrl'
      }).
      when('/sessions/new', {
        templateUrl: 'templates/session.html',
        controller: 'SessionCtrl'
      }).
      when('/sessions', {
        templateUrl: 'templates/log.html',
        controller: 'SessionsCtrl'
      }).
      when('/sessions/:id', {
        templateUrl: 'templates/session.html',
        controller: 'SessionCtrl'
      }).
      when('/test', {
        templateUrl: 'templates/link_banner.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);