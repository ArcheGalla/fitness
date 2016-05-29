import './workshop.scss';
export default function (module) {
  module.directive('fitnessWorkshops', function () {
    return ({
      template: `
       <section id="workshops">
        <div class="container-fluid">
          <div class="section-heading scrollpoint sp-effect3">
            <h1>Семінари</h1>
            <div class="divider"></div>
            <!--<p>Oleose Beautiful App Landing Page</p>-->
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-12 scrollpoint sp-effect5 workshop" ng-repeat="workshop in vm.workshops">
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
                      <img ng-src="{{lecture.avatar}}" alt="{{lecture.firstName + ' ' + lecture.lastName}}">
                      <h3 class="lecture-name">{{lecture.firstName + ' ' + lecture.lastName}}</h3>
                    </div>
                  </div>
                </div>

                <div class="col-md-8">
                  <div>
                    <p class="inline">Дата: {{ workshop.date_info.date }}</p>
                    <p class="inline">Час: {{ workshop.date_info.time.start }}-{{ workshop.date_info.time.end }}</p>
                  </div>
                  <p>Зал: {{ workshop.location }}</p>
                  <p class="workshop-price">Вартість: {{ workshop.price }} грн</p>
                  <p class="description">{{ workshop.description }}</p>
                </div>
              </div>
              <div class="buy-wrap"><a href="" class="btn btn-primary btn-lg">Квиток</a></div>
            </div>

          </div>
        </div>
    </section>
      `
    });
  });
}