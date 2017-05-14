(function () {

    var ProductsController = function($scope, AjaxService) {
        $scope.title = 'Products';

        $scope.onRemove = function (id) {
            AjaxService.deleteProduct(id)
                .then(function () {
                    AjaxService.getProducts()
                        .then(function (res) {
                            $scope.data.products = res.data;
                        });
                });
        }
    };

    angular.module('invoicesApp.ProductsController', [])

        .controller('ProductsController', ProductsController);

}());