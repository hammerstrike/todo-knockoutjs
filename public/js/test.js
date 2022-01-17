require.config({
    baseUrl: './js/',
    paths: {
        'jasmine': ['lib/jasmine'],
        'jasmine-html': ['lib/jasmine-html'],
        'jasmine-boot1': ['lib/boot0'],
        'jasmine-boot2': ['lib/boot1'],
        ko: 'lib/knockout-3.5.1',
        text: 'lib/text',
        jquery: 'lib/jquery-3.6.0.min',
        TodoHeaderApp: 'components/header/header-app',

        TodoFormApp: 'components/todo-form/todo-form-app',
        TodoFormModel: 'components/todo-form/todo-form-model',
        TodoServerProxy: 'components/server-proxy/server-proxy',

        TodoItemsApp: 'components/todo-items/todo-items-app',
        TodoItemsModel: 'components/todo-items/todo-items-model',
        'TodoItemsModel.Spec': 'components/todo-items/todo-items-model.spec',

        // TodoItemApp: 'components/todo-item/todo-item-app',
        // TodoItemModel: 'components/todo-item/todo-item-model',
        // TodoItemServerProxy: 'components/todo-item/todo-item-server-proxy',
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot1': {
            deps: ['jasmine', 'jasmine-html']
        },
        'jasmine-boot2': {
            deps: ['jasmine', 'jasmine-html']
        }
    }
});

require(['jasmine-boot1', 'jasmine-boot2'], function () {
    require(['TodoItemsModel.Spec'],  function () {
        window.onload();
    });
});
