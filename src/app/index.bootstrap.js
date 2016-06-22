import '../assets/js/ui-bootstrap/ui-bootstrap-custom-0.13.4';
import '../assets/js/ui-bootstrap/ui-bootstrap-custom-tpls-0.13.4';
import './images';
import '../assets/js/ng-text-truncate';
import '../assets/styles/sass/index.scss';
import 'jquery-waypoints/waypoints.min';

const queryModule = require('../assets/js/scripts');
const app = angular.module('fitness', ['ui.bootstrap','ngTextTruncate']);

require('./components/presenter-info/presenter-info')(app);
require('./components/mainCtrl')(app);
require('./service/tickets-id')(app);
require('./service/tickets_modal')(app);
require('./components/nav-menu/nav-menu')(app);
require('./components/main-section/main-section')(app);
require('./components/organizers/organizers')(app);
require('./components/convention/convention')(app);
require('./components/workshops/workshop')(app);
require('./components/schedule/schedule')(app);
require('./components/tickets/tickets')(app);
require('./components/demo-video/demo-video')(app);

require('./components/partners/partners')(app);
require('./components/partnership/partnership')(app);

require('./components/location/location')(app);
require('./components/footer/footer')(app);

angular.element(document).ready(function () {
  angular
    .bootstrap(document, ['fitness'], {
      strictDi: true
    });
  queryModule();
});
