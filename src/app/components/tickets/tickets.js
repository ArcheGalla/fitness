/*http://themeforest.net/item/gym-edge-gym-fitness-psd-template/15937019?s_rank=6*/

import "./tickets.scss";
export default function (module) {
  module.directive('fitnessTickets', function () {
    return ({
      template: `
       <section id="tickets">
        <div class="container-fluid">
          <div class="section-heading scrollpoint sp-effect3">
            <h1>Квитки</h1>
            <div class="divider"></div>
            <p>Приєднуйтесь до наймасштабнішої фітнес події року!</p>
          </div>
          <div class="container">
          <div class="row">
            <div class="col-xs-12">
            <div id="2event_tickets_widget" style="width: 640px;margin: 0 auto"></div>
            <script type="text/javascript">
              var widgetOptions = {bg_color: 'fcfcfc', id: 669875, lang: 'uk', };
              (function() {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = "https://2event.com/js/widget-tickets.js";
                document.getElementsByTagName('head')[0].appendChild(script);
              })();
            </script>
            </div>
          </div>
          </div>
          <!--<section class="pricing-section bg-6 scrollpoint sp-effect3">-->
            <!--<div class="pricing pricing&#45;&#45;pema ">-->
              <!--<div class="pricing__item">-->
                <!--<h3 class="pricing__title">1 жовтня</h3>-->
                <!--&lt;!&ndash;збільшити шрифт&ndash;&gt;-->
                <!--<p class="pricing__sentence">Субота</p>-->
                <!--<div class="pricing__price">-->
                  <!--<span class="pricing__currency">₴</span>-->
                  <!--640-->
                  <!--<span class="pricing__period">/ день</span>-->
                <!--</div>-->
                <!--<ul class="pricing__feature-list">-->
                  <!--<li class="pricing__feature">10 годин Non-Stop фітнес тренувань</li>-->
                  <!--<li class="pricing__feature">1500 людей</li>-->
                  <!--<li class="pricing__feature">3 сцени</li>-->
                <!--</ul>-->
                <!--<button class="pricing__action">Придбати квиток</button>-->
              <!--</div>-->
              <!--<div class="pricing__item pricing__item&#45;&#45;featured">-->
                <!--<h3 class="pricing__title">1-2 жовтня</h3>-->
                <!--<p class="pricing__sentence">Субота - Неділя</p>-->
                <!--<div class="pricing__price">-->
                  <!--<span class="pricing__currency">₴</span>-->
                  <!--720-->
                  <!--<span class="pricing__period">/ 2 дні</span>-->
                <!--</div>-->
                <!--<ul class="pricing__feature-list">-->
                  <!--<li class="pricing__feature">20 годин Non-Stop фітнес тренувань</li>-->
                  <!--<li class="pricing__feature">3000 людей</li>-->
                  <!--<li class="pricing__feature">27 презентерів</li>-->
                  <!--<li class="pricing__feature">3 сцени</li>-->
                <!--</ul>-->
                <!--<button class="pricing__action">Придбати квиток</button>-->
              <!--</div>-->
              <!--<div class="pricing__item">-->
                <!--<h3 class="pricing__title">2 Жовтня</h3>-->
                <!--<p class="pricing__sentence">Неділя</p>-->
                <!--<div class="pricing__price">-->
                  <!--<span class="pricing__currency">₴</span>-->
                  <!--640-->
                  <!--<span class="pricing__period">/ день</span>-->
                <!--</div>-->
                <!--<ul class="pricing__feature-list">-->
                  <!--<li class="pricing__feature">10 годин Non-Stop фітнес тренувань</li>-->
                  <!--<li class="pricing__feature">1500 людей</li>-->
                  <!--<li class="pricing__feature">3 сцени</li>-->
                <!--</ul>-->
                <!--<button class="pricing__action">Придбати квиток</button>-->
              <!--</div>-->
            <!--</div>-->
          <!--</section>-->
        </div>
    </section>
      `
    });
  });
}