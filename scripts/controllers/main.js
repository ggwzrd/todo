'use strict';

angular.module("todoApp")
.controller('mainCtrl', function($scope, dataService){

  $scope.addTodo = function(){
    var todo = {"value": "New todo!"};
    $scope.todos.unshift(todo)
  };

  dataService.getTodos(function(response){
    $scope.todos = response.data;
  });
  $scope.deleteTodo = function(todo, index){
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  };
  $scope.saveTodo = function(todo, index){
    dataService.saveTodo(todo);
  };
});
