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
      when('/session/new', {
        templateUrl: 'templates/session.html',
        controller: 'SessionCtrl'
      }).
      when('/log', {
        templateUrl: 'templates/log.html',
        controller: 'SessionsCtrl'
      }).
      when('/log/:id', {
        templateUrl: 'templates/log_session.html',
        controller: 'SessionCtrl'
      }).
      when('/test', {
        templateUrl: 'templates/link_banner.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);