'use strict';

angular.module("todoApp")
.service("dataService", function($http){
  this.getTodos = function(callback){
  $http.get("mock/todos.json")
    .then(callback);
  };
  this.deleteTodo = function(todo){
    console.log(todo.value);
  };
  this.saveTodo = function(todo){
    $.ajax({
      type: "POST",
      url: 'mock/todos.json',
      data: JSON.stringify({"value": todo.value}),
      success: function (json) {
                alert('Success');
                return true;
            },
      error: function(err) {
        alert('failed');
        console.log(err);
      },
      dataType: 'json'
    });
  };
});
