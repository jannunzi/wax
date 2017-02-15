(function () {
    angular
        .module("genXapp")
        .factory("UserService", UserService);

    function UserService($http, $q) {
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

        app.get('/api/user?', findByQueryString);
        /* for login */

        function createUser(user) {
            console.log(user);
            //return $http.post('/api/user', user);

            var deferred = $q.defer();
            $http.post("/api/user", user)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;

            /*
             var deferred = $q.defer();
             $http.post("/api/user",user)
             .success(function(response){
             deferred.resolve(response);
             });
             return deferred.promise;*/

            /*            $http({
             method: 'POST',
             url: '/api/user',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             transformRequest: function(obj) {
             var str = [];
             for(var p in obj)
             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
             return str.join("&");
             },
             data: user
             }).success(function (res) {
             console.log("login done" + res);
             deferred.resolve(res);
             });
             return deferred.promise;*/
        }

        function findUserByUserId(user) {
            return $http.get("/api/user/" + user.id);
        }

        function updateUser(userId, user) {
            return $http.put('/api/user/' + userId, user);
        }

        function deleteUser(userId) {
            return $http.delete('/api/user/' + userId);
        }

        function findAllUsers() {
            return $http.get("/api/users/admin");
        }

        function login(user) {
            /*
             var url = "/api/user?username=" + user.username + "&password=" + user.password;
             return $http.get(url);
             */

            var deferred = $q.defer();
            $http.get(`/api/user?username=${user.username}&password=${user.password}`)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function logout() {
            return $http.post("/api/logout");
        }

    }
})();