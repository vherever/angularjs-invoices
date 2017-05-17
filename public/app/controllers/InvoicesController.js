(function () {

    var InvoicesController = function ($scope, $rootScope, AjaxService) {
        $scope.title = 'Invoices';

        $scope.onRemove = function (id) {
            AjaxService.deleteInvoice(id)
                .then(function () {
                    AjaxService.getInvoices()
                        .then(function (res) {
                            $scope.data.invoices = res.data;
                        });
                });
        };

        $scope.onEdit = function (invoice) {
            $rootScope.invoice = invoice;
        }
    };

    angular.module('invoicesApp.InvoicesController', [])

        .controller('InvoicesController', InvoicesController);

}());