

angular.module("app", ['ngRoute', 'ngCookies'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        // route for the home page
                        .when('/', {
                            templateUrl: 'components/home/HomeView.html',
                            controller: 'HomeController'
                        })
                        // route for the about page
                        .when('/about', {
                            templateUrl: 'components/about/AboutView.html',
                            controller: 'AboutController'
                        })
                        // route for the contact page
                        .when('/contact', {
                            templateUrl: 'components/contact/ContactView.html',
                            controller: 'ContactController'
                        })
                        .otherwise({
                            templateUrl: "components/home/HomeView.html",
                            controller: 'HomeController'
                        });
            }])
        .run(['$rootScope', '$cookieStore', '$http', function ($rootScope, $cookieStore, $http) {


                $rootScope.currentLang = $cookieStore.get('currentLang') || {};
                if ($rootScope.currentLang == "") {
                    $rootScope.currentLang = "ar";
                    $cookieStore.put('currentLang', $rootScope.currentLang);
                }
                $http.get('data/Lang.json')
                        .then(function (res) {
                            $rootScope.langData = res.data;
                        });

                $rootScope.lang = function (key) {
                    var output = "";
                    angular.forEach($rootScope.langData, function (attr) {
                        if (attr.key === key) {
                            if ($rootScope.currentLang === "ar")
                                output = attr.ArLabel;
                            else
                                output = attr.EnLabel;

                            return;
                        }
                    });
                    return output;

                };
            }]);


