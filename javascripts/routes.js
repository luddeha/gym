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
      when('/session', {
        templateUrl: 'templates/session.html'
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