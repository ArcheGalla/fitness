const tempalate = require('./presenter.html');

export default function (module) {
  module
    .component('presenter', {
      templateUrl: tempalate,
      bindings: {
        avatar: '=',
        firstName: '=',
        lastName: '=',
        employment: '=',
        description: '='
      },
      controller: function () {
        console.log(this);
      },
      controllerAs: 'vm'
    });
}
