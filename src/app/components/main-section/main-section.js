import './main-section.scss';

export default function (module) {
  module.directive('mainSection', function () {
    return ({
      template: `
        <section class="main-section">
          <div class="container">
            <div class="row">
              <div class="col-md-7 scrollpoint sp-effect1 main-section-left">

                <h2>Lviv Fitness Weekend</h2>
                <!--<h2>30 Вересня - 1,2 Жовтня</h2>-->

                <p>Фізична культура – частина загальної культури. Львів – культурна столиця України. Ми вважаємо, що фізична
                  культура також мусить на рівні бути представлена у Львові!</p>
                <p>Ми знаємо як робити спортивні заходи! У нас глибокі знання і багаторічний досвід у сфері фітнесу!</p>
                <p>Ми знаємо як навчати людей, аби вони були справжніми фахівцями в галузі здорового способу життя!</p>
                <p>В нас багато друзів – справжніх професіоналів у сфері спорту та велнесу!</p>
                <p>Ми - організатори Lviv Fitness Weekend, команда професіоналів, які знають, що потрібно тренеру!</p>

                <div class="row main-actions text-center">
                  <div class="col-xs-4"><a href="" class="btn btn-primary">Конвенція</a></div>
                  <div class="col-xs-4"><a href="" class="btn btn-primary">Семінари</a></div>
                  <div class="col-xs-4"><a href="" class="btn btn-primary">Форум</a></div>
                </div>
              </div>

              <div class="col-md-5 scrollpoint sp-effect2 hidden-xs hidden-sm main-section-right">
                <img src="slider_2.png" alt="fitness lviv weekend">
              </div>
            </div>
          </div>
      </section>
      `
    });
  })
}