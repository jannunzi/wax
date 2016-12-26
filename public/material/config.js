(function () {
    angular
        .module("MaterialApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "features/activity/templates/activity.html"
            })
    }
})();