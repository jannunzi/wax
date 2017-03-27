/**
 * Created by Nischay M on 1/29/2017.
 * Created by Anupma on 2/2/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("WebsiteListController", WebsiteListController)
        .controller("WebsiteNewController", WebsiteNewController)
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        var uid = ($routeParams.uid);

        function init() {
            vm.uid = uid;
            WebsiteService
                .findWebsitesByUser(uid)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error(function (error) {
                    vm.alert = "No websites found!";
                });
        }

        init();
    }

    function WebsiteNewController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.createWebsite = createWebsite;
        var uid = ($routeParams.uid);
        var wid = ($routeParams.wid);
        vm.uid = uid;
        vm.wid = wid;

        function init() {
            WebsiteService
                .findWebsitesByUser(uid)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error(function (error) {
                    vm.alert = "No websites found!";
                });
        }

        init();

        function createWebsite(website) {
            if (!website || !website.name || website.name == '') {
                vm.alert = 'Website name is required.';
            } else {
                WebsiteService
                    .createWebsite(uid, website)
                    .success(function (website) {
                        $location.url(`/user/${uid}/website`);
                    })
                    .error(function (error) {
                        vm.alert = "No websites found!";
                    });
            }
        }
    }

    function WebsiteEditController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;

        var uid = ($routeParams.uid);
        var wid = ($routeParams.wid);
        vm.uid = uid;
        vm.wid = wid;
        function init() {
            WebsiteService
                .findWebsitesByUser(uid)
                .success(function (websites) {
                    vm.websites = websites;
                })
                .error(function () {
                    vm.alert = "No websites found!";
                });

            WebsiteService
                .findWebsiteById(wid)
                .success(function (website) {
                    vm.website = website;
                })
                .error(function () {
                    vm.alert = "No website found!";
                });
        }

        init();

        function updateWebsite(website) {
            if (!website || !website.name || website.name == '') {
                vm.alert = 'Website name is required';
            } else {
                WebsiteService
                    .updateWebsite(vm.wid, website)
                    .success(function (website) {
                        $location.url(`/user/${uid}/website`);
                    })
                    .error(function () {
                        vm.alert = "No website found!";
                    });
            }
        }

        function deleteWebsite() {
            WebsiteService
                .deleteWebsite(vm.wid)
                .success(function (website) {
                    $location.url(`/user/${uid}/website`);
                })
                .error(function () {
                    vm.alert = "No website found!";
                });
        }

    }

})();