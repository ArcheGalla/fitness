import 'jquery';
import 'angular';
import 'bootstrap';
import '../assets/js/ui-bootstrap/ui-bootstrap-custom-0.13.4';
import '../assets/js/ui-bootstrap/ui-bootstrap-custom-tpls-0.13.4';
import './images';


import '../assets/styles/sass/index.scss';

//import "Placeholdem/placeholdem.min";
import 'jquery-waypoints/waypoints.min';

import '../assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.revolution.js';

import 'slick-carousel';
import '../assets/js/scripts';

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
