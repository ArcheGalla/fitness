import "./tickets.scss";
import "./widget.scss";

export default function (module) {
  module.directive('fitnessTickets', function () {
    return ({
      templateUrl: require('./tickets.html'),
      controller: function ($scope, TICKETS_ID, FitnessTicket) {
        $scope.TICKETS_ID = TICKETS_ID;
        $scope.openWidget = FitnessTicket.open;
      }
    });
  });
}