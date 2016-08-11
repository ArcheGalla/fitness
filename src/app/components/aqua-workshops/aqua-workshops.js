export default  function (module) {
  module.directive('aquaWorkshops', function () {
    return ({
      templateUrl: require('./aqua-workshops.html'),
      controller: function ($scope) {
        $scope.workshops = require('./aqua-workshops.json');
      }
    });
  });
}