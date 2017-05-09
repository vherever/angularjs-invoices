(function () {

    var CustomersController = function ($scope) {
        $scope.title = 'Customers';
    };

    angular.module('invoicesApp.CustomersController', [])

        .controller('CustomersController', CustomersController);

}());