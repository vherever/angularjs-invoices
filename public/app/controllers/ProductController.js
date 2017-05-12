(function () {

    var ProductController = function ($scope, $http, $location) {
        $scope.title = 'Add Product';

        $scope.onSubmit = function () {
            $http.post('/api/products', $scope.product)
                .then(function (res) {
                    $scope.data.products.push(res.data);
                    $location.path('/products');
                });
        }
    };

    angular.module('invoicesApp.ProductController', [])

        .controller('ProductController', ProductController);

}());