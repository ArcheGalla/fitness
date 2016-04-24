const tempalate = require('./presenter.html');
const presenters = require('./presenters.json');

console.log('presenterspresenters',presenters);

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
