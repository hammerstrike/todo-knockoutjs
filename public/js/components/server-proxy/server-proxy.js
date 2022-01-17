define(['jquery'], function ($) {
    'use strict';

    return {
        getTodoList : function () {
            return $.ajax({
                url: 'http://localhost:3001/api/v1/todos',
                type: 'GET',
                contentType : 'application/json'
            });
        },
        createTodo : function (data) {
            return $.ajax({
                url: 'http://localhost:3001/api/v1/todos',
                type: 'POST',
                data: JSON.stringify(data),
                contentType : 'application/json'
            });
        },
        removeTodo : function (id) {
            return $.ajax({
                url: `http://localhost:3001/api/v1/todos/${id}`,
                type: 'DELETE',
                contentType : 'application/json'
            });
        },
        updateTodo : function (data) {
            return $.ajax({
                url: `http://localhost:3001/api/v1/todos/${data.id}`,
                type: 'PATCH',
                data: JSON.stringify(data),
                contentType : 'application/json'
            });
        }

    }
});