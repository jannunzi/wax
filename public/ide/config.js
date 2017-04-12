(function () {
    angular
        .module("genXapp")
        .config(configure);

    function configure($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller : "HomeController as HomeModel"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/user.view.html",
                controller : "UserController as UserModel"
            })
            .when("/user/:uid/website", {
                templateUrl: "views/website/website.view.html",
                controller : "WebsiteListController as WebsiteModel"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/website-new.html",
                controller: "WebsiteNewController as WebsiteNewModel"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/website-edit.html",
                controller: "WebsiteEditController as WebsiteEditModel"
            })
            .when("/user/:uid/page", {
                templateUrl: "views/page/page.view.html",
                controller : "PageListController as PageModel"
            })
            .when("/user/:uid/page/new", {
                templateUrl: "views/page/page.new.html",
                controller: "PageNewController as PageNewModel"
            })
            .when("/user/:uid/page/:pid", {
                templateUrl: "views/page/page.edit.html",
                controller: "PageEditController as PageEditModel"
            })

            .when("/user", {
                templateUrl: "views/user/user.view.html",
                controller : "UserController as UserModel"
            })
            .when("/flow", {
                templateUrl: "views/flow/flow.view.html",
                controller : "FlowController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();