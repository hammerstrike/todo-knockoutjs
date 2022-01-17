define(['ko', 'TodoItemsModel'], function (ko, todoItemsModelInstance) {
    'use strict';

    return function TodoItemModel(params) {
        var self = this;
        
        self.description = params.description;
        self.status = params.status
        self.dueDate = params.dueDate
        self.id = params.id;

    }

});