import './forum-schedule.scss';

export default function (module) {
  module.directive('forumSchedule', function () {
    return ({
      templateUrl: require('./forum-schedule.html'),
      scope: true,
      controller: function ($scope) {

        //$scope.dayone = require('./forum-schedule-day-one.json');
        $scope.daytwo = require('./forum-schedule-day-two.json');

        //
        //const vm = this;
        //
        //vm.SCHEDULES = {
        //  ONE: 'one',
        //  TWO: 'two'
        //};
        //
        //
        //vm.currertSchedule = vm.SCHEDULES.ONE;
        //
        //vm.setSchedule = (day)=> {
        //  switch (day) {
        //    case vm.SCHEDULES.ONE:
        //    {
        //      vm.currertSchedule = vm.SCHEDULES.ONE;
        //      break;
        //    }
        //    case vm.SCHEDULES.TWO:
        //    {
        //      vm.currertSchedule = vm.SCHEDULES.TWO;
        //      break;
        //    }
        //  }
        //};

      }
      //controllerAs: 'forumSchedule'
    });
  });
}
