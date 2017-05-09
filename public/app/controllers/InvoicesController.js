(function () {

    var InvoicesController = function ($scope) {
        $scope.title = 'Invoices';
    };

    angular.module('invoicesApp.InvoicesController', [])

        .controller('InvoicesController', InvoicesController);

}());