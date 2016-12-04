angular.module("app").controller('HeaderController', ['$scope','$rootScope', '$cookieStore', function ($scope, $rootScope,$cookieStore) {
        // create a message to display in our view
        $scope.message = 'App Name : app';
        $scope.langLabel = function (){
            if ($rootScope.currentLang == "ar") {
                return "English";
            }else{
                return "عربي";
            }
        }
        $scope.changeLang = function () {
            if ($rootScope.currentLang == "ar") {
                $rootScope.currentLang = "en";
            } else {
                $rootScope.currentLang = "ar";
            }
            $cookieStore.put('currentLang', $rootScope.currentLang);
        };
    }]);

