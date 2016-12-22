// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);
// 设置tabs始终在底部
app.config(function($ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
})
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/tabs/qiushi");
    $stateProvider.state('tabs', {
            url: "/tabs",
            abstract: true,
            templateUrl: "views/tabs.html"
        })
        .state('tabs.qiushi', {
            url: "/qiushi",
            views: {
                "qiushi@tabs": {
                    templateUrl: "views/qiushi.html",
                    controller: "QiushiController"
                }
            }
        })
        .state("tabs.friends", {
            url: "/friends",
            views: {
                "friends@tabs": {
                    templateUrl: "views/friends.html",
                    controller: "FriendsController"
                }
            }
        })
        .state("tabs.others", {
            url: "/others",
            views: {
                "others@tabs": {
                    templateUrl: "views/others.html",
                    // controller: "OthersController"
                }
            }
        })
          .state("tabs.myself", {
            url: "/myself",
            views: {
                "myself@tabs": {
                    templateUrl: "views/myself.html",
                    // controller: "OthersController"
                }
            }
        })
        .state("tabs.qiushi.details", {
            url: "/details",
            views: {
                "qiushi@tabs": {
                    templateUrl: "views/details.html",
                    controller: "QiushiController"
                }
            }
        })
        .state("tabs.friends.addList", {
            url: "/addList",
            views: {
                "friends@tabs": {
                    templateUrl: "views/addList.html",
                    controller: "AddController"
                }
            }
        })
})



app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
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
