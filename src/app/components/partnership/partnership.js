import './partnership.scss';
export default function (module) {
  module.directive('partnership', function () {
    return ({
      template: `
      <section class="partnership">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="partnership-align" direction="column">
                <h2 class="text-left">Стати нашим партнером легко !</h2>
                <p class="text-left ">
                  sd ad asd asd ads  asdasdasd asdas das a dasdds
                  sd ad asd asd ads  asdasdasd asdas das a dasdds
                  sd ad asd asd ads  asdasdasd asdas das a dasdds
                  sd ad asd asd ads  asdasdasd asdas das a dasdds
                  sd ad asd asd ads  asdasdasd asdas das a dasdds
                  sd ad asd asd ads  asdasdasd asdas das a dasdds
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="partnership-align" direction="row">
                 <div class="btn partner-btn" ng-click="partnership.showVideo()">Стати <br> партнером</div>
                 <div class="btn partner-btn partner-expo">Expo Участь</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
      controller: function ($modal) {
        this.showVideo = function () {
          $modal.open({
            template: `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/NtKssOqxLOE" frameborder="0" allowfullscreen></iframe>
              </div>
            `,
            size: 'lg'
          });
        }
      },
      controllerAs: 'partnership'
    });
  });
}