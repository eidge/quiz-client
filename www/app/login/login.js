'use strict';

(function () {
  'use strict';

  angular.module('starter').controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(authProvider, $state) {
    var ctrl = this;

    authProvider.me().then(redirect);

    ctrl.login = function (username, password) {
      authProvider.login(username, password).then(redirect);
    };

    function redirect() {
      $state.go('game.users');
    }
  }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFXO0FBQ1YsY0FBWSxDQUFDOztBQUViLFNBQU8sQ0FDSixNQUFNLENBQUMsU0FBUyxDQUFDLENBQ2pCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRXRDLFdBQVMsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUU7QUFDdkMsUUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixnQkFBWSxDQUFDLEVBQUUsRUFBRSxDQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFbEIsUUFBSSxDQUFDLEtBQUssR0FBRyxVQUFTLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDeEMsa0JBQVksQ0FDVCxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbkIsQ0FBQzs7QUFFRixhQUFTLFFBQVEsR0FBRztBQUNsQixZQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pCO0dBQ0Y7Q0FDRixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJsb2dpbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzdGFydGVyJylcbiAgICAuY29udHJvbGxlcignTG9naW5DdHJsJywgTG9naW5DdHJsKTtcblxuICBmdW5jdGlvbiBMb2dpbkN0cmwoYXV0aFByb3ZpZGVyLCAkc3RhdGUpIHtcbiAgICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgICBhdXRoUHJvdmlkZXIubWUoKVxuICAgICAgLnRoZW4ocmVkaXJlY3QpO1xuXG4gICAgY3RybC5sb2dpbiA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgYXV0aFByb3ZpZGVyXG4gICAgICAgIC5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgICAgIC50aGVuKHJlZGlyZWN0KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QoKSB7XG4gICAgICAkc3RhdGUuZ28oJ2dhbWUudXNlcnMnKTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=