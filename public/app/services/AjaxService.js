(function () {

    var AjaxService = function ($http, $routeParams, $rootScope) {
        return {
            getProducts : function () {
                return $http.get('/api/products');
            },
            getCustomers: function () {
                return $http.get('/api/customers');
            },
            postCustomer: function (customer) {
                return $http.post('/api/customers', customer);
            },
            updateCustomer: function () {
                return $http.put('/api/customers/' + $routeParams.id , $rootScope.customer);
            },
            deleteCustomer: function (id) {
                return $http.delete('/api/customers/' + id);
            },
            postProduct: function (product) {
                return $http.post('/api/products', product);
            },
            deleteProduct: function (id) {
                return $http.delete('/api/products/' + id);
            },
            updateProduct: function () {
                return $http.put('/api/products/' + $routeParams.id, $rootScope.product)
            }
        };
    };

    angular.module('invoicesApp.AjaxService', [])

        .factory('AjaxService', AjaxService)

}());