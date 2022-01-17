define('TodoFormApp', ['jquery', 'ko', 'TodoFormModel'], function ($, ko, TodoFormModel) {
    'use strict';

    return {
        init: function () {
            // ko.components.register('todo-form', {
            //     // viewModel: TodoFormModel,
            //     viewModel: { instance: new TodoFormModel() },
            //     // template: { element: document.getElementById('todo-form') }
            //     template: { require: 'text!./components/todo-form/todo-form.html'}
            // });
            ko.applyBindings(new TodoFormModel(), document.getElementById('todo-form'));
        }
    }
});