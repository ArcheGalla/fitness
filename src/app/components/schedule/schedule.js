export default function (module) {
  module.directive('fitnessSchedule', function () {
    return ({
      template: `
       <section class="schedule" id="screens" ng-controller="scheduleCtrl as schedule">
        <div class="container">
          <div class="section-heading scrollpoint sp-effect3">
            <h1>Розклад</h1>
            <div class="divider"></div>
            <p>Розклад уточнюється</p>
          </div>

          <div class="filter scrollpoint sp-effect3" ng-if="false">
            <a href="javascript:void(0)" ng-click="schedule.setSchedule(schedule.SCHEDULES.ALL)" class="button"
               ng-class="{ 'active' : schedule.SCHEDULES.ALL === schedule.currertSchedule }">Всі дні</a>
            <a href="javascript:void(0)" ng-click="schedule.setSchedule(schedule.SCHEDULES.ONE)" class="button"
               ng-class="{ 'active' : schedule.SCHEDULES.ONE === schedule.currertSchedule }">Перший день</a>
            <a href="javascript:void(0)" ng-click="schedule.setSchedule(schedule.SCHEDULES.TWO)" class="button"
               ng-class="{ 'active' : schedule.SCHEDULES.TWO === schedule.currertSchedule }">Другий день</a>
          </div>

        </div>
        <div class="schedule-table" ng-if="false">
          <div class="container-fluid">
            <div class="row">
              <!--<div class="col-lg-12">-->
              <!--<div class="section-heading">-->
              <!--<h3>Сцена 1</h3>-->
              <!--<div class="divider"></div>-->
              <!--&lt;!&ndash;<p>See what’s included in the App</p>&ndash;&gt;-->
              <!--</div>-->
              <!--</div>-->
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 scene">
                <div class="schedule-row" ng-if="schedule.SCHEDULES.ALL === schedule.currertSchedule">
                  <span>08.00 - 09.00</span>
                  <span>about schedule</span>
                  <span>some info</span>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 scene">
                <div class="schedule-row" ng-if="schedule.SCHEDULES.ONE === schedule.currertSchedule">
                  <span>08.00 - 09.00</span>
                  <span>about schedule</span>
                  <span>second</span>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 scene">
                <div class="schedule-row" ng-if="schedule.SCHEDULES.TWO === schedule.currertSchedule">
                  <span>08.00 - 09.00</span>
                  <span>about schedule</span>
                  <span>third</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
      `
    });
  });
}