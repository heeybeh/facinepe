// Ionic Starter App
/*global angular */
/*global cordova, console, Firebase, alert*/
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        'use strict';
        $ionicPlatform.ready(function () {
            // Stuff in here
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
        
            .state('login', {
                cache: false,
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'AppCtrl'
            })
        
            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html',
                controller: 'AppCtrl'
            })
        
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'AppCtrl'
            })
        
            .state('courses', {
                url: '/courses',
                templateUrl: 'templates/courses.html',
                controller: 'CoursesCtrl'
            })
        
            .state('subjects', {
                url: '/subjects',
                templateUrl: 'templates/subjects.html',
                controller: 'CoursesCtrl'
            })
        
            .state('phones', {
                url: '/phones',
                templateUrl: 'templates/phones.html'
            });

        $urlRouterProvider.otherwise('/login');
    })

    .controller('AppCtrl', function ($scope, $ionicModal, $state) {
        'use strict';
    
        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
    
        $scope.openModal = function () {
            $scope.modal.show();
        };
    
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
 
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
 
        $scope.$on('modal.hidden', function () {
            $scope.modal.hide();
        });
 
        $scope.$on('modal.removed', function () {
        
        });
    
        $scope.go = function (state) {
            $state.go(state);
        };
    })

    .controller('CoursesCtrl', function ($scope, $state) {
        'use strict';
        
        $scope.items = [
            { curso: "Ambiental/Rural" },
            { curso: "Direito" },
            { curso: "Educação/Pedagogia" },
            { curso: "Engenharia/Arquitetura" },
            { curso: "Gestão/Administração" },
            { curso: "Saúde/Biomedicina" },
            { curso: "Saúde/Enfermagem" },
            { curso: "Saúde/Estética" },
            { curso: "Saúde/Farmácia" },
            { curso: "Saúde/Fisioterapia" },
            { curso: "Saúde/Medicina" },
            { curso: "Saúde/Multidisciplinar" },
            { curso: "Saúde/Nutrição" },
            { curso: "Saúde/Odontologia" },
            { curso: "Saúde/Psicologia" },
            { curso: "Saúde/Veterinária" },
            { curso: "Tecnologia da Informação" }
        ];
    });