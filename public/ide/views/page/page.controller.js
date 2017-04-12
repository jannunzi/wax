/**
 * Created by Hardik S on 1/29/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("PageListController", PageListController)
        .controller("PageNewController", PageNewController)
        .controller("PageEditController", PageEditController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        var uid = ($routeParams.uid);

        function init() {
            vm.uid = uid;
            PageService
                .findPagesByUser(uid)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error(function (error) {
                    vm.alert = "No pages found!";
                });
        }

        init();
    }

    function PageNewController($routeParams, $location, PageService) {
        var vm = this;
        vm.createPage = createPage;
        var uid = ($routeParams.uid);
        var pid = ($routeParams.pid);
        vm.uid = uid;
        vm.pid = pid;

        function init() {
            PageService
                .findPagesByUser(uid)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error(function (error) {
                    vm.alert = "No pages found!";
                });
        }

        init();

        function createPage(page) {
            if (!page || !page.name || page.name == '') {
                vm.alert = 'Page name is required.';
            } else {
                PageService
                    .createPage(uid, page)
                    .success(function (page) {
                        $location.url(`/user/${uid}/page`);
                    })
                    .error(function (error) {
                        vm.alert = "No pages found!";
                    });
            }
        }
    }

    function PageEditController($routeParams, $location, PageService) {
        var vm = this;
        vm.deletePage = deletePage;
        vm.updatePage = updatePage;

        var uid = ($routeParams.uid);
        var pid = ($routeParams.pid);
        vm.uid = uid;
        vm.pid = pid;
        function init() {
            PageService
                .findPagesByUser(uid)
                .success(function (pages) {
                    vm.pages = pages;
                })
                .error(function () {
                    vm.alert = "No pages found!";
                });

            PageService
                .findPageById(pid)
                .success(function (page) {
                    vm.page = page;
                })
                .error(function () {
                    vm.alert = "No page found!";
                });
        }

        init();

        function updatePage(page) {
            if (!page || !page.name || page.name == '') {
                vm.alert = 'Page name is required';
            } else {
                PageService
                    .updatePage(vm.pid, page)
                    .success(function (page) {
                        $location.url(`/user/${uid}/page`);
                    })
                    .error(function () {
                        vm.alert = "No page found!";
                    });
            }
        }

        function deletePage() {
            PageService
                .deletePage(vm.pid)
                .success(function (page) {
                    $location.url(`/user/${uid}/page`);
                })
                .error(function () {
                    vm.alert = "No page found!";
                });
        }

    }

})();