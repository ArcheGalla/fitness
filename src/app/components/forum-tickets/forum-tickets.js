import "./forum-tickets.scss";

export default function (module) {
  module.directive('forumTickets', function () {
    return ({
      templateUrl: require('./forum-tickets.html'),
      controller: function ($scope) {
        //$scope.TICKETS_ID = TICKETS_ID;
        //$scope.openWidget = FitnessTicket.open;
      }
    });
  });
}