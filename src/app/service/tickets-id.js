export default function (module) {
  module
    .factory('TICKETS_ID', function () {
      return ({
        FITNESS_WEEKEND_FIRST: 13538,
        FITNESS_WEEKEND_SECOND: 13539,
        FITNESS_WEEKEND_TWO_DAYS: 13541
      });
    })
    .factory('FORUM_MANAGERS_TICKET_IDS', function () {
      return ({
        MANAGERS_EVENT_FIRST: 15128,
        MANAGERS_EVENT_SECOND: 15130,
        MANAGERS_EVENT_TWO_DAYS: 15129
      });
    })
    .factory('FORUM_EVENT_ID', function () {
      return 707358;
    })
    .factory('FORUM_MANAGERS_EVENT_ID', function () {
      return 707362;
    })
    .factory('CONVENTION_EVENT_ID', function () {
      return 669875;
    });
}