import './organizers.scss';

export default function (module) {
  module.directive('fitnessOrganizers', function () {
    return ({
      template: `
        <section id="organizers">
          <div class="container">
            <div class="section-heading scrollpoint sp-effect3">
              <h1>Організатори</h1>
              <div class="divider"></div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-item scrollpoint sp-effect2">
                  <img ng-src="{{ 'sergey_putsov.png' }}" alt="Сергій Пуцов">
                  <h3>Сергій Пуцов</h3>
                  <p>Головний тренер фітнес клубу «Skyfitness» (Київ).
                    Кандидат наук фізичного виховання і спорту.
                    Майстер спорту України з важкої атлетики.
                    Співзасновник фітнес - проекту Oxygen Workout</p>
                  <div class="social">
                    <!--<a href="#" class="scrollpoint sp-effect3">-->
                    <!--<i class="fa fa-twitter fa-lg"></i>-->
                    <!--</a>-->
                    <!--<a href="#" class="scrollpoint sp-effect3">-->
                    <!--<i class="fa fa-google-plus fa-lg"></i>-->
                    <!--</a>-->
                    <a href="https://www.facebook.com/putsov.sergei" target="_blank" class="scrollpoint sp-effect3">
                      <i class="fa fa-facebook fa-lg"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-item scrollpoint sp-effect5">
                  <img ng-src="{{ 'anna_lashchuk.png' }}" alt="Анна Лащук">
                  <h3>Анна Лащук</h3>
                  <p>
                    Заступник генерального директора ТВК "Південний".
                    Голова громадської організації. «Здорового способу життя».
                    Власниця фітнес - центру Vita Sana.
                    Чемпіонка International dance competition Leader. Дипломований
                    та сертифікований фітнес - тренер групових та персональних тренувань</p>
                  <div class="social">
                    <!--<a href="#" class="scrollpoint sp-effect3"><i class="fa fa-twitter fa-lg"></i></a>-->
                    <!--<a href="#" class="scrollpoint sp-effect3"><i class="fa fa-google-plus fa-lg"></i></a>-->
                    <a href="https://www.facebook.com/anna.laschuk" target="_blank" class="scrollpoint sp-effect3">
                      <i class="fa fa-facebook fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-item scrollpoint sp-effect1">
                  <img ng-src="{{ 'sergey_konyushok.png' }}" alt="Сергій Конюшок">
                  <h3>Сергій Конюшок</h3>
                  <p>Керівник та співвласник мережі спортивних клубів «Олімп» (Львів).
                    Майстер спорту України міжнародного класу.
                    Чемпіон та рекордсмен світу зі стронгмену.
                    Президент федерації стронгмену України</p>
                  <div class="social">
                    <!--<a href="#" class="scrollpoint sp-effect3"><i class="fa fa-twitter fa-lg"></i></a>-->
                    <!--<a href="#" class="scrollpoint sp-effect3"><i class="fa fa-google-plus fa-lg"></i></a>-->
                    <a href="https://www.facebook.com/sergiy.konyushok" target="_blank" class="scrollpoint sp-effect3">
                      <i class="fa fa-facebook fa-lg"></i>
                    </a>
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