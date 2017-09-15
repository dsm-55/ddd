// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

		 /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  /*用于修改安卓tab居下 --结束*/

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
//悦读
  .state('tab.read', {
    url: '/read',
    views: {
      'tab-read': {
        templateUrl: 'templates/tab-read.html',
        controller: 'ReadCtrl'
      }
    }
  })
//书屋
.state('tab.bookHome', {
      url: '/bookHome',
      views: {
        'tab-bookHome': {
          templateUrl: 'templates/tab-bookHome.html',
          controller: 'bookHomeCtrl'
        }
      }
    })
//圈子
    .state('tab.circle', {
      url: '/circle',
      views: {
        'tab-circle': {
          templateUrl: 'templates/tab-circle.html',
          controller: 'CircleCtrl'
        }
      }
    })
//社区
  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
//我的
  .state('tab.mine',{
  	url:'/mine',
  	views:{
  		'tab-mine':{
  			templateUrl:'templates/tab-mine.html',
  			controller:'MineCtrl'
  		}
  	}
  })
//登录
   .state('tab.login',{
  	url:'/login',
  	views:{
  		'tab-mine':{
  			templateUrl:'templates/tab-login.html',
  			controller:'LoginCtrl'
  		}
  	}
  })
//扫一扫
  .state('tab.sao',{
  	url:'/sao',
  	views:{
  		'tab-read':{
  			templateUrl:'templates/tab-sao.html',
  			controller:'saoCtrl'
  		}
  	}
  })
	
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/read');

});
