define(['jquery'], function ($) {
    'use strict';

    return {
        createTodo : function (description) {
            return $.ajax({
                url: '/api/v1/todos',
                type: 'POST',
                data: {
                    description
                }
            });
        }

    }
});