var app = angular.module('ajaxApp');

app.controller('FirstController', ['$scope', '$http', function ($scope, $http) {
    //här är logiken som körs när man kommer till root page av din sida.
    $scope.name = 'Ikhlaq';
    $scope.names = ['Max', 'Ikhlaq', 'Calle'];

    //console.log function
    $scope.show = function () {
        console.log('hello');

    };
    $scope.showData = function () {
        var url = 'http://jsonplaceholder.typicode.com/posts';
        $http.get(url)
        .then(function (data) {
            $scope.data = data;
          
            
        })

    };
    $scope.showBilder = function () {
        var url = 'http://jsonplaceholder.typicode.com/photos';
        $http.get(url)
        .then(function (bilder) {
            //eftersom vad vi får tillbacka är i data array måste bi skriva så här.....
            $scope.bilder = bilder.data;
        })
    }

}]);

app.controller('ResultsController',['$scope', function ($scope) {
    $scope.results = [
        {name: 'Max', score: 4 },
        {name: 'calle', score: 8 },
        {name: 'Ikhlaq', score: 3 },
    ];
    

}]);

app.controller('WeatherController', ['$scope', '$location', function ($scope, $location) {

    // get the input from form
    $scope.weather = function (city) {
        console.log(city);
        $location.path('/weatherResults/' + city);
    };
}]);
app.controller('WeatherResultsController', ['$scope', 'getWeather', '$routeParams', function ($scope, getWeather, $routeParams) {
    
    var city = $routeParams.city;
    
    // get the input from form
        console.log(city);
        getWeather.inputWeather(city)
        .then(function (data) {
            console.log(data);
            $scope.location = data.location.name;
            $scope.description = data.current.condition.text;
            $scope.image = data.current.condition.icon;
            $scope.temp_c= data.current.temp_c;

    });

}]);

/*

app.controller('WeatherController', ['$scope', '$location', function($scope, $location) {
    $scope.weather = function (city) {
        $location.path('/weatherResults/' + city);

    };
}]);
app.controller('weatherResultsController', ['$scope', '$routeParams', '$getWeather', function($scope, $routeParams, getWeather) {
    
    var city = $routeParams.city;

    getWeather.inputWeather(city)
    .then(function (data){
        console.log(data);
        $scope.location = data.location.name; */