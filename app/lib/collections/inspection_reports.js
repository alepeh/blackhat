InspectionReports = new Mongo.Collection('inspection_reports');


if (Meteor.isServer) {
  InspectionReports.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}

HeatingUnit = new SimpleSchema({
    vendor_name: {
        type: String,
        label: "Hersteller",
        max: 100
    }
});

InspectionReports.attachSchema(new SimpleSchema({
    location: {
        type: Location,
        label: "Objekt"
    },
    heating_unit: {
        type: HeatingUnit,
        label: "Feuerstätte"
    }
}));

