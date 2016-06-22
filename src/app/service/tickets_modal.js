export default function (module) {
  module.factory('FitnessTicket', function ($modal,TWO_EVENT_ID) {
    return ({
      open: function (ticketId) {
        if (typeof  ticketId !== 'number') {
          return;
        }
        $modal
          .open({
            template: `
                <div class="widget-modal">
                  <div id="2event_tickets_widget"></div>
                </div>
              `,
            size: 'md',
            windowClass: 'widget-modal',
            animate: true,
            controller: function () {

            }
          })
          .opened
          .then(function () {

            window.widgetOptions = {bg_color: 'fcfcfc', id: TWO_EVENT_ID, tickets: [ticketId], lang: 'uk'};

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = "https://2event.com/js/widget-tickets.js";
            document.getElementsByTagName('head')[0].appendChild(script);

          });
      }
    });
  });
}