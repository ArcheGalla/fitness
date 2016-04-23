// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';
import './images';

import '../assets/js/slick.min.js';
import '../assets/js/placeholdem.min.js';
import '../assets/js/waypoints.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.revolution.js';
import '../assets/js/scripts.js';

import '../assets/styles/sass/index.scss';


window.addEventListener('load', function () {
  console.log('all content is loaded');
});

//angular.element(document).ready(function () {
//  angular.bootstrap(document, ['fitness'], {
//    strictDi: true
//  });
//  appMaster.preLoader();
//});
