(function () {

    var ProductsController = function($scope) {
        $scope.title = 'Products';
    };

    angular.module('invoicesApp.ProductsController', [])

        .controller('ProductsController', ProductsController);

}());