	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ui.router']);

	// configure our routes
	scotchApp.config(function($stateProvider,$urlRouterProvider) {

		$stateProvider
			// route for the home page
			.state('home', {
				url: '/home',
		        templateUrl: 'templates/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.state('about', {
				url: '/about',
		        templateUrl: 'templates/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.state('contact', {
				url: '/contact',
		        templateUrl: 'templates/contact.html',
				controller  : 'contactController'
			});

     $urlRouterProvider.otherwise('/home');

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.data = {
			name:'Sanni Michael Tomiwa',
			designation:'Software Engineer',
			discipline:'Computer Science',
			alma_mater:'University of Ibadan',
			qualification:'Bsc computer science. Distinction'
		}
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
