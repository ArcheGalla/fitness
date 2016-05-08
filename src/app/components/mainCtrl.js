export default function (module) {
  module
    .controller('MainCtrl', function ($http) {
      this.presenters = require('../components/presenter/presenters.json');
      this.workshops = require('./workshops/workshops.json');

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


    });
}
