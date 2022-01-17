define('TodoItemApp', ['jquery', 'ko', 'TodoItemModel'], function ($, ko, TodoItemModel) {
    'use strict';

    return {
        init: function () {
            // ko.components.register('todo-item', {
            //     viewModel: TodoItemModel,
            //     template: { element: document.getElementById('todo-item') }
            //     // template: { require: 'text!./components/todo-item/todo-item.html'}
            // });
            ko.applyBindings(new TodoItemModel(), document.getElementById('todo-item'));

        }
    }
});