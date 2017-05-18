(function () {

    var InvoiceController = function ($scope, $http, $location, $routeParams, AjaxService) {
        if($routeParams.id) {
            $scope.title = 'Edit Invoice';
        } else {
            $scope.title = 'Add Invoice';
            $scope.invoice = {};
        }

        $scope.products = [];

        $scope.onItemSelect = function () {
            console.log('onItemSelect');
            // AjaxService.postItem($scope.products[$scope.products.length - 1].id)
            //     .then(function (res) {
            //
            //     });
        };

        $scope.onItemDeselect = function () {
            console.log('onItemDeselect');
        };

        $scope.onSubmit = function () {
            if($routeParams.id) {
                // AjaxService.updateProduct($scope.product)
                //     .then(function () {
                //         $location.path('/products');
                //     })
            } else {
                AjaxService.postInvoice($scope.invoice)
                    .then(function (res) {
                        $scope.data.invoices.push(res.data);
                        $location.path('/invoices');
                    });
            }
        }
    };

    angular.module('invoicesApp.InvoiceController', [])

        .controller('InvoiceController', InvoiceController);

}());