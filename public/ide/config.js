(function () {
    angular
        .module("genXapp")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller : "HomeController"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller : "RegisterController"
            })
            .when("/profile/:userid", {
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })

            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller : "LoginController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();