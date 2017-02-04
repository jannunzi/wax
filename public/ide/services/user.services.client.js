(function(){
    angular
        .module("genXapp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login: login,
            logout: logout,
            findAllUsers: findAllUsers,
            findUserByUserId: findUserByUserId,
            deleteUser: deleteUser,
            updateUser: updateUser,
            createUser: createUser
        };
        return api;

        app.get('/api/user?', findByQueryString); /* for login */

        function createUser(user) {
            return $http.post('/api/user', user);
        }

        function findUserByUserId(user) {
            return $http.get("/api/user/" + user.id);
        }

        function updateUser(userId, user) {
            return $http.put('/api/user/'+userId, user);
        }

        function deleteUser(userId) {
            return $http.delete('/api/user/'+userId);
        }

        function findAllUsers() {
            return $http.get("/api/users/admin");
        }

        function login(user) {
            var url = "/api/user?username=" + user.username + "&password=" + user.password;
            return $http.get(url);
        }

        function logout() {
            return $http.post("/api/logout");
        }

    }
})();