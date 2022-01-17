define('TodoItemsModel.Spec', ['jquery', 'TodoItemsModel', 'TodoServerProxy'], function ($, todoItemsModelInstance, todoServerProxy) {

    describe("TodoItemsModel", function () {

        beforeAll(function () {
            spyOn(todoServerProxy, 'getTodoList').and.returnValue({
                done: function (callback) {
                    return callback([{ id: 1, description: 'test', status: 'ACTIVE' }]);
                }
            });
        });

        it("should have todos array defined", function () {
            expect(todoItemsModelInstance.todos).toBeDefined();
        })

        it('should load data', function () {
            todoItemsModelInstance.loadData();
            console.log(todoItemsModelInstance.todos());
            expect(todoItemsModelInstance.todos().length).toBeGreaterThan(0);

        })
    })

})