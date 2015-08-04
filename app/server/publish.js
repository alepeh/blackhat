/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('locations', function (/* args */) {
  return Locations.find();
});

Meteor.publish('inspection_reports', function (/* args */) {
  return InspectionReports.find();
});

Meteor.publish('jobs', function (/* args */) {
  return Jobs.find();
});