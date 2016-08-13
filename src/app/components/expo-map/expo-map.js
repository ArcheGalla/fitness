export default  function (module) {
  module.directive('expoMap', function () {
    return ({
      templateUrl: require('./expo-map.html')
    });
  });
}