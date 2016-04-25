// index.html page to dist folder
import './images';

import '../assets/js/slick.min.js';
import '../assets/js/placeholdem.min.js';
import '../assets/js/waypoints.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js';
import '../assets/js/rs-plugin/js/jquery.themepunch.revolution.js';
import '../assets/js/scripts.js';

import '../assets/styles/sass/index.scss';

const presenter = require('./components/presenter/presenter');
const presenters = require('./components/presenter/presenters.json');

angular.module('fitness', []);

//presenter(angular.module('fitness'));

angular
  .module('fitness')
  .controller('MainCtrl', function ($rootScope) {
    //$rootScope.loaded = false;
    this.presenters = presenters;
  });
  //.run(($rootScope, $window, $timeout)=> {
    //$window.addEventListener('load', ()=> {
    //  $timeout(()=> {
    //    $rootScope.loaded = true;
    //  }, 300)
    //});
  //});

angular
  .element(document)
  .ready(function () {
    angular
      .bootstrap(document, ['fitness'], {
        strictDi: true
      });
  });
