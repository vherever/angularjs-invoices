(function () {

    var MainController = function ($scope, $http, AjaxService) {
        $scope.data = {
            customers: [],
            products: [],
            invoices: []
        };

        $scope.init = function () {
            AjaxService.getProducts()
                .then(function (res) {
                    $scope.data.products = res.data;
                });

            AjaxService.getCustomers()
                .then(function (res) {
                    $scope.data.customers = res.data;
                });
        };
    };

    angular.module('invoicesApp.MainController', [])

        .controller('MainController', MainController);

}());