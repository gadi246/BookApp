(function(){
    'use strict'
    angular.module('myApp.filters', [])
    
.filter('capitalize', [function() {
    return function(input) {
        return (!!input) ? input.replace(/[^0-9a-zA-Z ]/g,'').split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        }).join(' ') : '';
    }
}]);

})();