// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';
import '../assets/img/freeze/Slides/hand-freeze.png';
const angular = require('angular');
require('jquery');
require('bootstrap');

import '../assets/js/slick.min.js';
import '../assets/js/placeholdem.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.revolution.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js';
import '../assets/js/waypoints.min.js';
import '../assets/js/scripts.js';
//
//// main App module
////import "./index.module";
//

import '../assets/styles/sass/index.scss';

//
//const App = angular.module("fitness", []);
//
//
//App.controller('main', function ($scope) {
//  $scope.test = 'test';
//});
//

angular.module('fitness', []);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['fitness'], {
    strictDi: true
  });
  //appMaster.preLoader();
});
