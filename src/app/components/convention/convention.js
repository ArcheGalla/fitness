import './convention.scss';

export default function (module) {
  module.directive('fitnessConvention', function () {
    return ({
      templateUrl: require('./convention.html'),
      controller: function ($scope) {
        $scope.presenters  = require('../presenter/presenters.json');
        console.log('$scope.presenters', $scope.presenters.length);
      }
    });
  });
}