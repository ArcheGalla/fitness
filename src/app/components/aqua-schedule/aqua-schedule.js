import './aqua-schedule.scss';

export default function (module) {
  module.directive('aquaSchedule', function () {
    return ({
      restrict: 'E',
      templateUrl: require('./aqua-schedule.html'),
      controller: function ($scope) {
        $scope.test = 'test';
      }
    });
  });
}