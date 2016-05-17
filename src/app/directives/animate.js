export default function (module) {
  module.directive('animate', function () {
    return ({
      restrict: 'A',
      link: function ($scope, $element, $attr) {

        //$($element).waypoint(function () {
          //$(this).toggleClass('active');
          //$(this).toggleClass('animated fadeInLeft');
        //}, {offset: '100%'});
      }
    });
  });
}