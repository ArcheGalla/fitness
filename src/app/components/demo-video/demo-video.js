import './demo-video.scss';

export default function (module) {
  module.directive('demoVideo', function () {
    return ({
      template: `
      <section id="demo">
        <div class="container">
          <div class="section-heading scrollpoint sp-effect3">
            <h1>Відео звіт</h1>
            <div class="divider"></div>
            <!--<p>Take a closer look in more detail</p>-->
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2 scrollpoint sp-effect2">
              <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LFzz0s2HOBg" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
    </section>
      `
    });
  });
}