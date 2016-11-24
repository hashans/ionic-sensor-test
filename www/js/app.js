// Ionic Starter App for testinf sensors

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })


    .controller("indexController", function ($scope, $interval) {

        function onSuccess(values) {
            console.log(values);
            console.log("ACCELEROMETER");
            $scope.state = values[0];
            //console.log($scope.state);
        }

        document.addEventListener("deviceready", function () {

            sensors.enableSensor("ACCELEROMETER");
            // sensors.enableSensor("GYROSCOPE");
            // sensors.enableSensor("PROXIMITY");
            // sensors.enableSensor("TEMPERATURE");
            // sensors.enableSensor("AMBIENT_TEMPERATURE");
            // sensors.enableSensor("PRESSURE");
            // sensors.enableSensor("MAGNETIC_FIELD");

            $interval(function () {
                sensors.getState(onSuccess);
            }, 500);


        }, false);

    });
