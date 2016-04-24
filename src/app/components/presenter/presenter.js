const tempalate = require('./presenter.html');

export default function (module) {
  module
    .component('presenter', {
      templateUrl: tempalate,
      bindToController: {
        avatar: '=',
        firstName: '=',
        lastName: '=',
        employment: '=',
        socialLinks: '=',
        description: '='
      },
      controller: function () {

      },
      controllerAs: 'vm'
    });
}
