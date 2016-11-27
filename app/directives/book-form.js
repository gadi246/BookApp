(function(){
    'use strict';

angular.module('myApp.directives', [])

    .directive('bookForm',function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/book-form.html',
            replace: true,
            scope: {
                bookItem: "=",
                submitForm: "=",
                selectedBook: "="
            }
        }
    });
})();