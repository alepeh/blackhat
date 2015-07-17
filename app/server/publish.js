/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('locations', function (/* args */) {
  return Locations.find();
});