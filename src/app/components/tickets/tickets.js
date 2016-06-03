import "./tickets.scss";
export default function (module) {
  module.directive('fitnessTickets', function () {
    return ({
      templateUrl: require('./tickets.html'),
      controller: function () {
        var vm = this;

        vm.openWidget = function () {
          console.log('work');
          window.$('#2event_tickets_widget').css({
            height: '400px',
            width: '640px'
          });
        }
      },
      controllerAs: 'vm'
    });
  });
}