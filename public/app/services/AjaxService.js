(function () {

    var AjaxService = function ($http, $routeParams, $rootScope) {
        return {
            getProducts : function () {
                return $http.get('/api/products');
            },
            getCustomers: function () {
                return $http.get('/api/customers');
            },
            postProduct: function (product) {
                return $http.post('/api/products', product);
            },
            deleteProduct: function (id) {
                return $http.delete('/api/products/' + id);
            },
            updateProduct: function (product) {
                return $http.put('/api/products/' + $routeParams.id, $rootScope.product)
            }
        };
    };

    angular.module('invoicesApp.AjaxService', [])

        .factory('AjaxService', AjaxService)

}());