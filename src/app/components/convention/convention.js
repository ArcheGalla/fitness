export default function (module) {
  module.directive('fitnessConvention', function () {
    return ({
      template: `
      <section id="convention">
        <div class="container-fluid">
          <div class="section-heading scrollpoint sp-effect3">
            <h1>Презентери конвенції</h1>
            <div class="divider"></div>
          </div>
          <div class="row">

            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 scrollpoint"
                 ng-class="{ 'sp-effect1': $index % 2 === 0, 'sp-effect2': $index % 2 === 1}"
                 ng-repeat="p in vm.presenters track by $index">

              <div modal-info info="p" class="media"
                   ng-class="{ 'left-order': $index % 2 === 0, 'right-order': $index % 2 === 1}">
                <div class="avatar-order">
                  <img ng-if="p.avatar" class="avatar" ng-src="{{ p.avatar }}" alt="{{ p.firstName + ' ' + p.lastName }}">
                  <div ng-if="!p.avatar" class="avatar">{{ p.firstName[0] + ' ' + p.lastName[0] }}</div>
                </div>

                <div class="media-body">
                  <h3 class="media-heading">{{ p.lastName + ' ' + p.firstName }}</h3>

                  <p>{{ p.employment }}</p>

                  <!--<div class="social">-->
                  <!--<a ng-href="{{ s.link }}" ng-show="s.link" target="_blank" class="fa la-lg"-->
                  <!--ng-repeat="s in p.socialLinks" ng-class="s.icon"></a>-->
                  <!--</div>-->
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