define('TodoHeaderApp', ['jquery', 'ko', 'TodoFormModel'], function ($, ko, TodoFormModel) {
    'use strict';

    function TodoHeaderModel(){}

    return {
        init: function () {
            // ko.components.register('todo-header', {
            //     template: { element: document.getElementById('todo-header') },
            //     // template: { require: 'text!./components/header/header.html' }
            // });
            ko.applyBindings({}, document.getElementById('todo-header'));
        }
    }
});