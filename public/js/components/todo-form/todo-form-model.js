define(['ko', 'TodoItemsModel', 'TodoServerProxy'], function (ko, todoItemsModelInstance, todoServerProxy) {
    'use strict';

    return function TodoFormModel() {
        var self = this;

        self.description = ko.observable();

        self.reset = function () {
            self.description('');
        };

        self.createTodo = function () {
            // todoItemsModelInstance.addTodo(self.description());
            todoServerProxy
                .createTodo({
                    description: self.description()
                })
                .done(function () {
                    console.log('Task created');
                    self.reset();
                    todoItemsModelInstance.loadData();
                });

        }
    }

});