var app = angular.module("app", ['ngRoute']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix("");
}]);

app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    }).
    when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
    }).
    when('/simdrone', {
        templateUrl: 'simdrone.html',
        controller: 'SimDroneCtrl'
    }).
    when('/linefollower', {
        templateUrl: 'linefollower.html',
        controller: 'LinefollowerCtrl'
    }).
    when('/serialportexpress', {
        templateUrl: 'serialportexpress.html',
        controller: 'SerialPortExpressCtrl'
    }).
    when('/portfolio', {
        templateUrl: 'portfolio.html',
        controller: 'PortfolioCtrl'
    }).
    when('/pos', {
        templateUrl: 'pos.html',
        controller: 'PosCtrl'
    }).
    when('/trackhead', {
        templateUrl: 'trackhead.html',
        controller: 'TrackHeadCtrl'
    }).
    when('/easydownloader', {
        templateUrl: 'easydownloader.html',
        controller: 'EasyDownloaderCtrl'
    }).
    otherwise({
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    });
});