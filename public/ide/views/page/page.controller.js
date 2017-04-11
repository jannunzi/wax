/**
 * Created by Nischay M on 1/29/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("PageController", PageController);

    function PageController($routeParams) {
        //user/:uid/website/:wid/page
        var vm = this;
        var uid = ($routeParams.uid);
        var wid = ($routeParams.wid);
        vm.uid = uid;
        vm.wid = wid;
    }
})();
