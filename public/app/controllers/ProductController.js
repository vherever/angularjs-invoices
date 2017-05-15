(function () {

    var ProductController = function ($scope, $http, $location, $routeParams, AjaxService) {
        if($routeParams.id) {
            $scope.title = 'Edit Product';
        } else {
            $scope.title = 'Add Product';
            $scope.product = {};
        }

        $scope.onSubmit = function () {
            if($routeParams.id) {
                AjaxService.updateProduct($scope.product)
                    .then(function () {
                        $location.path('/products');
                    })
            } else {
                AjaxService.postProduct($scope.product)
                    .then(function (res) {
                        $scope.data.products.push(res.data);
                        $location.path('/products');
                    });
            }
        }
    };

    angular.module('invoicesApp.ProductController', [])

        .controller('ProductController', ProductController);

}());