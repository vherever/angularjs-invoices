(function () {

    angular.module('invoicesApp', [
        'ngRoute',

        'invoicesApp.MainController',
        'invoicesApp.InvoicesController',
        'invoicesApp.InvoiceController',
        'invoicesApp.ProductsController',
        'invoicesApp.ProductController',
        'invoicesApp.CustomersController',
        'invoicesApp.CustomerController',
        'invoicesApp.AjaxService',
        'angularjs-dropdown-multiselect'

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
                    .when('/product', {
                        templateUrl: '/app/views/product.html',
                        controller: 'ProductController'
                    })
                    .when('/product/:id', {
                        templateUrl: '/app/views/product.html',
                        controller: 'ProductController'
                    })
                    .when('/customers', {
                        templateUrl: '/app/views/customers.html',
                        controller: 'CustomersController'
                    })
                    .when('/customer', {
                        templateUrl: '/app/views/customer.html',
                        controller: 'CustomerController'
                    })
                    .when('/customer/:id', {
                        templateUrl: '/app/views/customer.html',
                        controller: 'CustomerController'
                    })
                    .when('/invoices', {
                        templateUrl: '/app/views/invoices.html',
                        controller: 'InvoicesController'
                    })
                    .when('/invoice', {
                        templateUrl: '/app/views/invoice.html',
                        controller: 'InvoiceController'
                    })
                    .when('/invoice/:id', {
                        templateUrl: '/app/views/invoice.html',
                        controller: 'InvoiceController'
                    })


                    .otherwise({
                        redirectTo: '/'
                    });

                $locationProvider.html5Mode(true);
            }
        );

}());