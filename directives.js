var app = angular.module('ajaxApp');

app.directive('ikhlaqIsCool', function () {
    return {
        //vad som händer här, visas i custom directive.
        template: '<div><p>Ikhlaq is the best person in the world</p></div>',
        restrict: 'E',
        link: function (scope, element, attrs) {
            // Här körs logiken bakom din directive
            console.log('directive is active');
        }

    };

});