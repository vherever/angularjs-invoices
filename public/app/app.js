(function () {

    angular.module('invoicesApp', [
        'ngRoute',

        'invoicesApp.InvoicesController',
        'invoicesApp.ProductsController',
        'invoicesApp.CustomersController'

    ])
        .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: '/app/views/invoices.html',
                        controller: 'InvoicesController'
                    })
                    .when('/products', {
                        templateUrl: '/app/views/products.html',
                        controller: 'ProductsController'
                    })
                    .when('/customers', {
                        templateUrl: '/app/views/customers.html',
                        controller: 'CustomersController'
                    })
                    .when('/invoices', {
                        templateUrl: '/app/views/invoices.html',
                        controller: 'InvoicesController'
                    })


                    .otherwise({
                        redirectTo: '/'
                    });

                $locationProvider.html5Mode(true);
            }
        );

}());