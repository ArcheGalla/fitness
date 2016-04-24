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

window.addEventListener('load', function () {
  var docHeight = $(window).height();

  const eljQuery = $('.tp-banner');

  eljQuery.revolution({
    delay: 9000,
    startwidth: 1170,
    startheight: docHeight,
    hideThumbs: 10,
    touchenabled: false,
    fullWidth: "on",
    hideTimerBar: "on",
    fullScreen: "on",
    onHoverStop: "off",
    fullScreenOffsetContainer: ""
  });
});

var revSlider = function () {


  var mainSlider = $('.tp-banner').revolution({
    delay: 9000,
    startwidth: 1170,
    startheight: docHeight,
    hideThumbs: 10,
    touchenabled: false,
    fullWidth: "on",
    hideTimerBar: "on",
    fullScreen: "on",
    onHoverStop: "off",
    fullScreenOffsetContainer: ""
  });

}

//angular.element(document).ready(function () {
//  angular.bootstrap(document, ['fitness'], {
//    strictDi: true
//  });
//  appMaster.preLoader();
//});
