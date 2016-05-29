const schedule_day_one = require('./day_one.json');
const schedule_day_two = require('./day_two.json');

export  default function (module) {
  module.controller('scheduleCtrl', function ($scope) {

    $scope.dayone = schedule_day_one;
    $scope.daytwo = schedule_day_two;

    const vm = this;

    vm.SCHEDULES = {
      ONE: 'one',
      TWO: 'two'
    };


    vm.currertSchedule = vm.SCHEDULES.ONE;

    vm.setSchedule = (day)=> {
      switch (day) {
        case vm.SCHEDULES.ONE:
        {
          vm.currertSchedule = vm.SCHEDULES.ONE;
          break;
        }
        case vm.SCHEDULES.TWO:
        {
          vm.currertSchedule = vm.SCHEDULES.TWO;
          break;
        }
      }
    };

  });
}