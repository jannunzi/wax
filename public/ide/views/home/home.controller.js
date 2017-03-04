/**
 * Created by Nischay M on 1/29/2017.
 */
(function () {
    angular
        .module("genXapp")
        .controller("HomeController", HomeController);

    /* Modified by Anupma : Added Controller code for login and register*/
    function HomeController($rootScope, $location, UserService) {

        var vm = this;
        vm.login = login;
        vm.register = register;
        vm.mySidenav = false;

        function login(user) {
            if (user) {
                var ret = UserService.login(user);
                ret.success(function (userObj) {
                    if (userObj === '0') {
                        vm.alert = "No such user";
                    }
                    else {
                        $rootScope.currentUser = userObj;
                        $location.url(`/user/${userObj._id}/website`);
                    }
                })
                    .error(function () {
                        vm.alert = "No such user";
                    });
            }
        }

        function register(user) {
            if (user.username === undefined || user.password === undefined || user.password2 === undefined) {
                vm.alert = 'Please enter the required details';
            }
            else if (user.password != user.password2) {
                vm.alert = 'Password does not match';
            }
            else {
                UserService.createUser(user)
                    .success(function (userObj) {
                        $rootScope.currentUser = userObj;
                        $location.url(`/user/${userObj._id}/website`);
                    })
                    .error(function (error) {
                        vm.alert = "Cannot create a user";
                    });
            }
        }
    }

})();