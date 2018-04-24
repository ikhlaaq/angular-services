var app = angular.module('ajaxApp');

app.factory('getWeather', ['$http', function ($http) {
    var weather = {
        inputWeather: function (city) {
            var url = `http://api.apixu.com/v1/current.json?key=985f917ec59f40d4b8871246182404&q=${city}`;
            return $http.get(url)
            .then(function (data) {
                return data.data;
            
            });

        }
    };
return weather;
}]);