(function () {

    var MainController = function ($scope, $http) {
        $scope.data = {
            customers: [],
            products: [],
            invoices: []
        };

        $scope.init = function () {
            console.log('init Main Controller');
            $http.get('/api/products')
                .then(function (res) {
                    console.log('products', res);
                    $scope.data.products = res.data;
                });

            $http.get('/api/customers')
                .then(function (res) {
                    console.log('customers', res);
                    $scope.data.customers = res.data;
                });
        };
    };

    angular.module('invoicesApp.MainController', [])

        .controller('MainController', MainController);

}());