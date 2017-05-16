(function () {

    var CustomersController = function ($scope, AjaxService, $rootScope) {
        $scope.title = 'Customers';

        $scope.onRemove = function (id) {
            AjaxService.deleteCustomer(id)
                .then(function () {
                    AjaxService.getCustomers()
                        .then(function (res) {
                            $scope.data.customers = res.data;
                        });
                });
        };

        $scope.onEdit = function (customer) {
            $rootScope.customer = customer;
        }
    };

    angular.module('invoicesApp.CustomersController', [])

        .controller('CustomersController', CustomersController);

}());