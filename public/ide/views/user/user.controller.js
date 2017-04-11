/**
 * Created by Nischay M on 1/29/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("UserController", UserController);

    function UserController($routeParams, $location, UserService) {
        var vm = this;
        vm.updateProfile = updateProfile;
        vm.getWebsites = getWebsites;
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        var userId = ($routeParams.uid);

        function init() {
            var ret = UserService.findUserById(userId);
            ret
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                })
                .error(function () {
                    vm.error = "No such user";
                });
        }

        init();

        function updateProfile() {
            user = vm.user;
            UserService
                .updateUser(userId, user)
                .success(function (status) {
                    if (status == 200) {
                        $location.url("/user/" + userId);
                    }
                })
                .error(function () {
                    vm.error = "No such user";
                });
        }

        function getWebsites() {
            $location.url(`/user/${userId}/website`);
        }

        function deleteUser() {
            var userId = ($routeParams.uid);
            UserService
                .deleteUser(userId)
                .success(function (status) {
                    if (status == "OK") {
                        $location.url(`/#`);
                    }
                })
                .error(function () {
                    vm.error = "No such user";
                });
        }

        function logout() {
            UserService.logout()
                .then(function () {
                    $location.url(`/#`);
                })
        }
    }
})();
