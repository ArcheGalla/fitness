export default function (module) {
  module.directive('fitnessPartners', function () {
    return ({
      template: `
      <section id="partners" class="shadow">
        <div class="container">
          <div class="section-heading inverse scrollpoint sp-effect3">
            <!--<div class="section-heading inverse" animate>-->
            <h1>Партнери</h1>
            <div class="divider"></div>
            <!--<p>Read What's The People Are Saying About Us</p>-->
          </div>
        </div>
        <!-- todo: move partners in to ng-repeat -->
        <div class="partners-logos scrollpoint sp-effect3">
          <a href="">
            <img class="logo" src="ak.png" alt="">
          </a>
          <a href="">
            <img class="logo" src="graziya.png" alt="">
          </a>
          <a href="">
            <img class="logo" src="olimp.png" alt="">
          </a>
          <a href="">
            <img class="logo" src="olimpic.png" alt="">
          </a>
          <a href="">
            <img class="logo" src="try_styhiy.png" alt="">
          </a>
          <a href="">
            <img class="logo" src="vs_fitness_centre.png" alt="">
          </a>
          <a href="">
            <img class="logo" src="expo.png" alt="">
          </a>
        </div>

        <!--<button type="button" class="btn btn-primary btn-lg action-btn">EXPO</button>-->
        <!--<button type="button" class="btn btn-primary btn-lg action-btn">PARTNERS</button>-->
    </section>
      `
    });
  });
}