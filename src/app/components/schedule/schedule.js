import './schedule.scss';
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

              <div class="filter scrollpoint sp-effect3">
                <a href="javascript:void(0)" ng-click="schedule.setSchedule(schedule.SCHEDULES.ONE)" class="button"
                   ng-class="{ 'active' : schedule.SCHEDULES.ONE === schedule.currertSchedule }">Перший день</a>
                <a href="javascript:void(0)" ng-click="schedule.setSchedule(schedule.SCHEDULES.TWO)" class="button"
                   ng-class="{ 'active' : schedule.SCHEDULES.TWO === schedule.currertSchedule }">Другий день</a>
              </div>

            </div>

            <div class="schedule-table" ng-if="schedule.SCHEDULES.ONE === schedule.currertSchedule">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 scene" ng-repeat="scene in dayone">
                    <h4 class="text-center">{{ scene.title }}</h4>
                    <div class="schedule-row" ng-repeat="item in scene.lectures">
                      <span>{{ item.time }}</span>
                      <span>{{ item.instructor }}</span>
                      <span>{{ item.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="schedule-table" ng-if="schedule.SCHEDULES.TWO === schedule.currertSchedule">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 scene" ng-repeat="scene in daytwo">
                    <h4 class="text-center">{{ scene.title }}</h4>
                    <div class="schedule-row" ng-repeat="item in scene.lectures">
                      <span>{{ item.time }}</span>
                      <span>{{ item.instructor }}</span>
                      <span>{{ item.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      `,
      controller: 'scheduleCtrl',
      controllerAs: 'schedule'
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