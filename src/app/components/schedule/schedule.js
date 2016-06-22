import './schedule.scss';

//const schedule_day_one = require('./day_one.json');
//const schedule_day_two = require('./day_two.json');


export default function (module) {
  module.directive('fitnessSchedule', function () {
    return ({
      templateUrl: require('./schedule.html'),
      controller: function ($scope) {

        //$scope.dayone = schedule_day_one;
        //$scope.daytwo = schedule_day_two;

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
    });
  });
}


/*<!--<div class="col-lg-12">-->
 <!--<div class="section-heading">-->
 <!--<h3>Сцена 1</h3>-->
 <!--<div class="divider"></div>-->
 <!--&lt;!&ndash;<p>See what’s included in the App</p>&ndash;&gt;-->
 <!--</div>-->
 <!--</div>-->*/