import "./forum-workshop.scss";

export default function (module) {
  module.directive('forumWorkshop', function () {
    return ({
      templateUrl: require('./forum-workshop.html'),
      scope: true,
      controller: function ($scope /*FitnessTicket*/) {
        $scope.workshops = require('./workshops_forum.json');
        //$scope.openWidget = FitnessTicket.open;
      }
    });
  });
}