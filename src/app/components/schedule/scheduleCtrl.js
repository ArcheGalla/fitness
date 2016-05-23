export  default function (module) {
  module.controller('scheduleCtrl', function () {
    const vm = this;
    vm.SCHEDULES = {
      ALL: 'all',
      ONE: 'one',
      TWO: 'two'
    };

    //vm.all_days = true;
    //vm.day_one = false;
    //vm.day_two = false;

    vm.currertSchedule = vm.SCHEDULES.ALL;

    vm.setSchedule = (day)=> {
      switch (day) {
        case vm.SCHEDULES.ALL:
        {
          vm.currertSchedule = vm.SCHEDULES.ALL;
          break;
        }
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