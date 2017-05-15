(function () {

    var ProductsController = function($scope, AjaxService, $rootScope) {
        $scope.title = 'Products';

        $scope.onRemove = function (id) {
            AjaxService.deleteProduct(id)
                .then(function () {
                    AjaxService.getProducts()
                        .then(function (res) {
                            $scope.data.products = res.data;
                        });
                });
        };

        $scope.onEdit = function (product) {
            $rootScope.product = product;
        }
    };

    angular.module('invoicesApp.ProductsController', [])

        .controller('ProductsController', ProductsController);

}());