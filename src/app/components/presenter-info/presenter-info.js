import './presenter-info.scss';

export default function (module) {
  module.directive('modalInfo', function () {
    return ({
      restrict: 'A',
      bindToController: {
        info: '='
      },
      scope: true,
      controller: function ($scope, $modal) {
        const vm = this;


        $scope.$on('open:modal:info', ()=> {
          $modal
            .open({
              templateUrl: require('./presenter-info.html'),
              controller: function ($modalInstance, info) {
                var vm = this;
                vm.info = info;
                vm.close = $modalInstance.close;
              },
              animation: true,
              size: 'sm',
              controllerAs: 'vm',
              windowClass: 'center-modal',
              resolve: {
                info: ()=> vm.info
              }
            })
            .result
            .then(()=> {
              console.log('modal close');
            })
            .catch(()=> {
              console.log('modal dismiss');
            });
        });


      },
      controllerAs: 'vm',
      link: function (scope, element) {
        element.on('click', function (event) {
          scope.$emit('open:modal:info');
          console.log('presenter info click', event);
        })
      }
    })
      ;
  })
}