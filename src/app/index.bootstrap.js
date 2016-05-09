import 'jquery';
import 'angular';
import 'bootstrap';
import '../assets/js/ui-bootstrap/ui-bootstrap-custom-0.13.4';
import '../assets/js/ui-bootstrap/ui-bootstrap-custom-tpls-0.13.4';
import './images';


import '../assets/styles/sass/index.scss';
import 'jquery-waypoints/waypoints.min';

const queryModule = require('../assets/js/scripts');
const app = angular.module('fitness', ['ui.bootstrap']);

require('./components/presenter-info/presenter-info')(app);
require('./components/mainCtrl')(app);

angular.element(document).ready(function () {
  angular
    .bootstrap(document, ['fitness'], {
      strictDi: true
    });
  queryModule();
});
