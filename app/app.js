import './todo/todo';

angular.module('app', ['ngRoute', 'app.todo'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'TodoController',
        controllerAs: 'ctrl',
        templateUrl: 'todo/todo.html'
      })
      .when('/:status', {
        controller: 'TodoController',
        controllerAs: 'ctrl',
        templateUrl: 'todo/todo.html'
      })
      .otherwise({ redirectTo: '/' });
  });
