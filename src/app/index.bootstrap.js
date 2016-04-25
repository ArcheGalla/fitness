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


angular
  .module('fitness', ['ui.bootstrap'])
  .controller('MainCtrl', function ($http, $modal) {

    //this.testModal = function () {
    //  $modal.open({
    //    template: '<div>TEST</div>',
    //    controller: function () {
    //      console.log('test ctrl');
    //    }
    //  }).result.then(function () {
    //    console.log('then');
    //  }).catch(function () {
    //    console.log('catch');
    //  })
    //};
    //
    this.presenters = presenters;
    this.formData = {
      name: '',
      email: '',
      message: ''
    };

    this.sendMessage = function (valid, data) {
      if (valid) {
        $http
          .post('message', data)
          .then((response)=> {
            console.log('response', response);
          })
          .catch((error)=> {
            console.log('error', error);
          });
      }
    }
  })
  .directive('presenterInfo', function () {
    return {
      template: '',
      scope: {
        presenter: '='
      },
      link: (scope, element, attr)=> {
        element.on('click', (e)=> {
          console.log('e', e);
        });
      }
    }
  });

angular
  .element(document)
  .ready(function () {
    angular
      .bootstrap(document, ['fitness'], {
        strictDi: true
      });
  });
