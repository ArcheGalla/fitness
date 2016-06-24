import "./workshop.scss";

export default function (module) {
  module.directive('fitnessWorkshops', function () {
    return ({
      template: `
        <section id="workshops">
          <div class="container-fluid">
            <div class="section-heading scrollpoint sp-effect3">
              <h1>Семінари</h1>
              <div class="divider"></div>
              <!--<p>Розклад семінарів уточнюється</p>-->
              <p>Після проходження семінару всім учасникам видається сертифікат LVIV FITNESS WEEKEND</p>
            </div>
  
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12 scrollpoint sp-effect5 workshop" ng-repeat="workshop in workshops">
                <h3 class="workshop-name">{{ workshop.name }}</h3>
                <div class="row">
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 lecture"
                           ng-class="{
                                      'col-xs-12': workshop.lecturers.length === 1,
                                      'col-xs-6': workshop.lecturers.length === 2,
                                      'col-xs-4': workshop.lecturers.length === 3
                                      }" ng-repeat="lecture in workshop.lecturers">
                        <img ng-if="lecture.avatar" ng-src="{{lecture.avatar}}" alt="{{lecture.firstName + ' ' + lecture.lastName}}">
                        <h3 class="lecture-name">{{lecture.firstName }} <br ng-if="lecture.two">  {{ lecture.lastName}}</h3>
                      </div>
                    </div>
                  </div>
  
                  <div class="col-md-8">
                    <div>
                      <p class="inline">Дата: {{ workshop.date_info.date }}</p>
                      <p class="inline">Час: {{ workshop.date_info.time.start }}-{{ workshop.date_info.time.end }}</p><br>
                      <p class="inline">Тривалість: {{ workshop.duration }}</p><br>
                      <p class="inline" ng-show="workshop.people">Кількість учасників обмежена: ({{ workshop.people }} чоловік)</p>
                    </div>
                    <p>Зал: {{ workshop.location }}</p>
                    <p class="workshop-price">Вартість: {{ workshop.price }} грн</p>
                    <p class="description" ng-text-truncate="workshop.description"
                       ng-tt-chars-threshold="160"
                       ng-tt-more-label="Читати повністю"
                       ng-tt-less-label="Сховати"></p>

                  </div>
                </div>
                <div class="pull-right"><button type="button"  class="btn btn-primary btn-lg"  ng-click="openWidget(workshop.ticket_id,CONVENTION_EVENT_ID)">Квиток</button></div>
              </div>
            </div>
          </div>
        </section>
      `,
      controller: function ($scope, FitnessTicket,CONVENTION_EVENT_ID) {
        $scope.workshops = require('./workshops.json');
        $scope.openWidget = FitnessTicket.open;
        $scope.CONVENTION_EVENT_ID = CONVENTION_EVENT_ID;
      }
    });
  });
}