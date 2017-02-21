.service('CordovaNetwork', ['$ionicPlatform', '$q', function($ionicPlatform, $q) {
  // Get Cordova's global Connection object or emulate a smilar one

  var asyncGetConnection = function () {
    var q = $q.defer();
    $ionicPlatform.ready(function () {
      if(navigator.connection) {
        q.resolve(navigator.connection);
      } else {
        q.reject('');
      }
    });
    return q.promise;
  };

  return {}
  };
}]);

.controller('ConnectionCtrl', function(CordovaNetwork){
  CordovaNetwork.isOnline().then(function(isConnected) {
    alert(isConnected);
  }).catch(function(err){
    console.log(err);
  });
});