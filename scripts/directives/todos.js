angular.module("todoApp")
.directive("todos", function(){
  return{
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: 'todos'
  };
});
