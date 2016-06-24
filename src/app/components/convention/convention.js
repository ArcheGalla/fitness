import "./convention.scss";

export default function (module) {
  module.directive('fitnessConvention', function () {
    return ({
      templateUrl: require('./convention.html'),
      controller: function ($scope) {
        $scope.presenters  = require('./presenters.json');
      }
    });
  });
}