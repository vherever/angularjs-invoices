(function () {

    var ProductController = function ($scope, $http, $location, $routeParams, AjaxService) {
        $scope.title = 'Add Product';

        $scope.onSubmit = function () {
            AjaxService.postProduct($scope.product)
                .then(function (res) {
                    $scope.data.products.push(res.data);
                    $location.path('/products');
                });
        }
    };

    angular.module('invoicesApp.ProductController', [])

        .controller('ProductController', ProductController);

}());