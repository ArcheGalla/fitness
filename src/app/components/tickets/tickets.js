import './tickets.scss';
import './widget.scss';
export default function (module) {
  module.directive('fitnessTickets', function () {
    return ({
      templateUrl: require('./tickets.html'),
      controller: function ($modal) {
        var vm = this;

        vm.openWidget = function () {
          $modal
            .open({
              template: `
              <div class="widget-modal">
                <div id="2event_tickets_widget"></div>
                <script type="text/javascript">
                  var widgetOptions = {bg_color: 'fcfcfc', id: 669875, lang: 'uk',};
                  (function () {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.src = "https://2event.com/js/widget-tickets.js";
                    document.getElementsByTagName('head')[0].appendChild(script);
                  })();
                </script>
              </div>
              `,
              size: 'md',
              windowClass: 'widget-modal',
              animate: true,
              controller: function () {
                console.log('modal controller');
              },
              controllerAs: 'vm'
            })
        }
      },
      controllerAs: 'vm'
    });
  });
}