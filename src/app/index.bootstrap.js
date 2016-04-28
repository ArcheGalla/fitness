import '../assets/styles/sass/index.scss';

import '../assets/js/placeholdem.min.js';
import '../assets/js/waypoints.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.revolution.js';
import '../assets/js/slick.min.js';
import '../assets/js/scripts';

require('../../node_modules/angular-ui-bootstrap/template/modal/backdrop.html');
require('../../node_modules/angular-ui-bootstrap/template/modal/window.html');

const app = angular.module('fitness', ['ui.bootstrap.module.modal']);

require('./components/presenter-info/presenter-info')(app);
require('./components/mainCtrl')(app);


angular
  .element(document)
  .ready(function () {
    angular
      .bootstrap(document, ['fitness'], {
        strictDi: true
      });
  });
