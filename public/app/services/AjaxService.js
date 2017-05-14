(function () {

    var AjaxService = function ($scope, $http) {
        return {
            getProducts : function () {
                $http.get('/api/products');
            }
        }
    };

    angular.module('invoicesApp.AjaxService', [])

        .factory('AjaxService', function($http) {
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
                }
            };
        })

}());