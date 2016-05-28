import './main-section.scss';

export default function (module) {
  module.directive('mainSection', function () {
    return ({
      template: `
        <section class="main-section">
          <div class="container">
            <div class="row">
              <div class="col-md-7 scrollpoint sp-effect1 main-rigth">
                <h2>Lviv Fitness Weekend</h2>
                <!--<h2>30 Вересня - 1,2 Жовтня</h2>-->

                <p class="first">
                  Фізична культура – частина загальної культури. Львів – культурна столиця України. Ми вважаємо, що фізична
                  культура також мусить на рівні бути представлена у Львові!
                </p>

                <p>Ми знаємо як робити спортивні заходи! У нас глибокі знання і багаторічний досвід у сфері фітнесу!</p>
                <p>Ми знаємо як навчати людей, аби вони були справжніми фахівцями в галузі здорового способу життя!</p>
                <p>В нас багато друзів – справжніх професіоналів у сфері спорту та велнесу!</p>
                <p>Ми - організатори Lviv Fitness Weekend, команда професіоналів, які знають, що потрібно тренеру!</p>

                <div class="main-actions">
                  <a href="" class="btn btn-primary btn-lg">Конвенція</a>
                  <a href="#workshops" class="btn btn-primary btn-lg">Семінари</a>
                  <a href="" class="btn btn-primary btn-lg">Форум</a>
                </div>

              </div>

              <div class="col-md-5 scrollpoint sp-effect2 main-left hidden-xs">
                <img src="slider_2.png" alt="fitness lviv weekend">
              </div>
            </div>
          </div>
      </section>
      `
    });
  })
}