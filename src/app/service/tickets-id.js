export default function (module) {
  module
    .factory('TICKETS_ID', function () {
      return ({
        FITNESS_WEEKEND_FIRST: 13538,
        FITNESS_WEEKEND_SECOND: 13539,
        FITNESS_WEEKEND_TWO_DAYS: 13541
      });
    })
    .factory('FORUM_EVENT_ID', function () {
        return 707358;
    })
    .factory('CONVENTION_EVENT_ID', function () {
      return 669875;
    });
}