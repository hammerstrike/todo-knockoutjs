define('TodoItemsApp', ['jquery', 'ko', 'TodoItemsModel'], function ($, ko, TodoItemsModel) {
    'use strict';

    return {
        init: function () {
            // ko.components.register('todo-items', {
            //     // viewModel: TodoItemsModel,
            //     viewModel: { instance: new TodoItemsModel() },
            //     // template: { element: document.getElementById('todo-items') }
            //     template: { require: 'text!./components/todo-items/todo-items.html'}
            // });
            ko.applyBindings(TodoItemsModel, document.getElementById('todo-items'));
        }
    }
});