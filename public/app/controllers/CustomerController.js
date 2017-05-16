(function () {

    var CustomerController = function ($scope, $http, $location, $routeParams, AjaxService) {
        if($routeParams.id) {
            $scope.title = 'Edit Customer';
        } else {
            $scope.title = 'Add Customer';
            $scope.customer = {};
        }

        $scope.onSubmit = function () {
            if($routeParams.id) {
                AjaxService.updateCustomer($scope.customer)
                    .then(function () {
                        $location.path('/customers');
                    })
            } else {
                AjaxService.postCustomer($scope.customer)
                    .then(function (res) {
                        $scope.data.customers.push(res.data);
                        $location.path('/customers');
                    });
            }
        }
    };

    angular.module('invoicesApp.CustomerController', [])

        .controller('CustomerController', CustomerController);

}());