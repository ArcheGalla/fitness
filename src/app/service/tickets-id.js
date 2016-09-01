export default function (module) {
  module
    .factory('TICKETS_ID', function () {
      return ({
        FITNESS_WEEKEND_FIRST: 17455,
        FITNESS_WEEKEND_SECOND: 17456,
        FITNESS_WEEKEND_TWO_DAYS: 17457
      });
    })
    .factory('FORUM_MANAGERS_TICKET_IDS', function () {
      return ({
        MANAGERS_EVENT_FIRST: 17463,
        MANAGERS_EVENT_SECOND: 17464,
        MANAGERS_EVENT_TWO_DAYS: 17465
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