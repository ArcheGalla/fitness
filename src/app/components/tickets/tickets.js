/*http://themeforest.net/item/gym-edge-gym-fitness-psd-template/15937019?s_rank=6*/
export default function (module) {
  module.directive('fitnessTickets', function () {
    return ({
      template: `
       <section id="tickets">
        <div class="container-fluid">
          <div class="section-heading inverse scrollpoint sp-effect3">
            <h1>Квитки</h1>
            <div class="divider"></div>
            <p>Приєднуйтесь до наймасштабнішої фітнес події року!</p>
          </div>
          <section class="pricing-section bg-6 scrollpoint sp-effect3">
            <div class="pricing pricing--pema ">
              <div class="pricing__item">
                <h3 class="pricing__title">1 жовтня</h3>
                <!--збільшити шрифт-->
                <p class="pricing__sentence">Субота</p>
                <div class="pricing__price">
                  <span class="pricing__currency">₴</span>
                  600
                  <span class="pricing__period">/ день</span>
                </div>
                <ul class="pricing__feature-list">
                  <li class="pricing__feature"></li>
                  <li class="pricing__feature">Support at $25/hour</li>
                  <li class="pricing__feature">1 campaign/month</li>
                </ul>
                <button class="pricing__action">Придбати квиток</button>
              </div>
              <div class="pricing__item pricing__item--featured">
                <h3 class="pricing__title">1-2 жовтня</h3>
                <p class="pricing__sentence">Субота - Неділя</p>
                <div class="pricing__price">
                  <span class="pricing__currency">₴</span>
                  800
                  <span class="pricing__period">/ 2 дні</span>
                </div>
                <ul class="pricing__feature-list">
                  <li class="pricing__feature">50 presentations/month</li>
                  <li class="pricing__feature">5 hours of free support</li>
                  <li class="pricing__feature">10 campaigns/month</li>
                </ul>
                <button class="pricing__action">Придбати квиток</button>
              </div>
              <div class="pricing__item">
                <h3 class="pricing__title">2 Жовтня</h3>
                <p class="pricing__sentence">Неділя</p>
                <div class="pricing__price">
                  <span class="pricing__currency">₴</span>
                  600
                  <span class="pricing__period">/ день</span>
                </div>
                <ul class="pricing__feature-list">
                  <li class="pricing__feature">Unlimited presentations</li>
                  <li class="pricing__feature">Unlimited support</li>
                  <li class="pricing__feature">Unlimited campaigns</li>
                </ul>
                <button class="pricing__action">Придбати квиток</button>
              </div>
            </div>
          </section>
        </div>
    </section>
      `
    });
  });
}