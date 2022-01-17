define('TodoItemsModel', ['jquery', 'ko', 'TodoServerProxy'], function ($, ko, todoServerProxy) {
    'use strict';

    function TodoItemsModel() {
        var self = this;
        self.todos = ko.observableArray();

        self.loadData = function () {
            self.todos.removeAll();
            todoServerProxy
                .getTodoList()
                .done(function (data) {
                    console.log(data);
                    data.map(item => {
                        self.todos.push(item);
                    })
                })
        }

        self.done = function (todo) {
            console.log('remove called', todo);
            todo.status = 'COMPLETED';
            todoServerProxy
                .updateTodo(todo)
                .done(function () {
                    self.loadData();
                });
        }

        self.remove = function (todo) {
            console.log('remove called', todo);
            todoServerProxy
                .removeTodo(todo.id)
                .done(function () {
                    self.todos.remove(todo);
                });
        }

    }

    return new TodoItemsModel();

});