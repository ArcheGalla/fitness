export default function (module) {
  module.directive('fitnessConvention', function () {
    return ({
      templateUrl: require('./convention.html'),
      controller: function () {
        this.test = 'test';
      },
      controllerAs: 'vm'
    });
  });
}