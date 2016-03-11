(function () {
    'use strict';

    angular.module('app.register', [])
            .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location'];
    function RegisterController(UserService, $location) {
        var vm = this;
        vm.name;
        vm.lastname;
        vm.country;
        vm.email;
        vm.ussername;
        vm.password;

        vm.saveUser = function () {
            var user = {
                name: vm.name,
                lastname: vm.lastname,
                country: vm.country,
                email: vm.email,                
                ussername: vm.ussername,
                password: vm.password
            };
            
            UserService.registerUser(onSuccess, onError, user);
        };
        
        function onSuccess() {
            console.log('user register successful');
            $location.path('/sigin');
        }
        
        function onError() {
            console.log('user not register');
        }
    }
})();