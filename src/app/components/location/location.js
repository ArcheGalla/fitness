export default function (module) {
  module.directive('fitnessLocation', function () {
    return ({
        template: `
        <section id="location">
          <div class="container-fluid">
            <div class="section-heading scrollpoint sp-effect3">
              <h1>Контакти</h1>
              <div class="divider"></div>
              <p>Виникли запитання</p>
            </div>

            <div class="row">
              <div class="col-lg-5">
                <div class="scrollpoint sp-effect1">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.73075733132!2d23.970097215708297!3d49.80992927939217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae70c10051b3d%3A0x648b5ac5170279fa!2z0JLQuNGB0YLQsNCy0LrQvtCy0LjQuSDRhtC10L3RgtGAICLQn9GW0LLQtNC10L3QvdC40LktRVhQTyI!5e0!3m2!1suk!2sua!4v1461493597913"
                      frameborder="0"
                      style="border:0"
                      width="100%"
                      height="365px"
                      allowfullscreen>
                  </iframe>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row">
                  <div class="col-md-6 col-sm-8 scrollpoint sp-effect1">

                    <p ng-if="vm.error" class="send-email-error">Сталась помилка. Спробуйте пізніше</p>
                    <p ng-if="vm.success" class="send-email-success">Ваше повідомлення успішно відправленне</p>
                    <form role="form" name="messageForm" novalidate
                          ng-submit="vm.sendMessage(messageForm.$valid,vm.formData)">
                      <div class="form-group">
                        <input type="text" name="name" ng-model="vm.formData.name" class="form-control"
                               ng-class="{'error': messageForm.name.$invalid && messageForm.$submitted}"
                               placeholder="Ім’я" required>
                      </div>
                      <div class="form-group">
                        <input type="email" name="email" ng-model="vm.formData.email" class="form-control"
                               ng-class="{'error': messageForm.email.$invalid && messageForm.$submitted}"
                               placeholder="Поштова скринька" required>
                      </div>
                      <div class="form-group">
                      <textarea cols="30" name="message" rows="10" ng-model="vm.formData.message" class="form-control"
                                ng-class="{'error': messageForm.message.$invalid && messageForm.$submitted}"
                                placeholder="Повідомлення" required></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg">Відправити</button>
                    </form>


                  </div>
                  <div class="col-md-6 col-sm-4 contact-details scrollpoint sp-effect2">
                    <div class="media">
                      <a class="pull-left" href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">м. Львів вул. Щирецька, 36</h4>
                      </div>
                    </div>
                    <div class="media">
                      <a class="pull-left" href="#">
                        <i class="fa fa-envelope fa-2x"></i>
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">
                          <a href="mailto:support@oleose.com">support@lviv.fitness.com</a>
                        </h4>
                      </div>
                    </div>
                    <div class="media">
                      <a class="pull-left" href="#">
                        <i class="fa fa-phone fa-2x"></i>
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">+38 (093) 126 43 88</h4>
                      </div>
                    </div>
                    <div class="media">
                      <a class="pull-left" href="#">
                        <img src="christina.png" alt="">
                      </a>
                      <div class="media-body">
                        <h2 class="contact-name">Христина Равриш</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
        `,
      controller: function ($http, $timeout, $scope) {
        var vm = this;

        vm.success = null;
        vm.error = null;

        vm.presenters = require('../presenter/presenters.json');
        vm.workshops = require('../workshops/workshops.json');

        vm.formData = {
          name: '',
          email: '',
          message: ''
        };

        vm.sendMessage = function (valid, data) {
          vm.error = null;


          if (valid) {
            $http
              .post('message', data)
              .then(()=> {
                vm.formData = {
                  name: '',
                  email: '',
                  message: ''
                };

                $scope.messageForm.$submitted = false;
                vm.success = true;

                $timeout(()=> {
                  vm.success = false;
                }, 4000);
              })
              .catch((error)=> {
                $scope.messageForm.$submitted = false;
                vm.error = error;
                $timeout(()=> {
                  vm.error = null;
                }, 4000);
              });
          }
        }
      },
      controllerAs: 'vm'
    });
  });
}