Locations = new Mongo.Collection('locations');


if (Meteor.isServer) {
  Locations.allow({
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

  Contact = new SimpleSchema({
    firstname: {
      type: String,
      label: "Vorname",
      max: 100
    },
    lastname: {
      type: String,
      label: "Nachname",
      max: 100
    }
  });

  Locations.attachSchema(new SimpleSchema({
  city: {
    type: String,
    label: "Ort",
    max: 100
  },
  street: {
    type: String,
    label: "Straße",
    max: 100
  },
  number: {
    type: String,
    label: "Nummer",
    max: 50
  },
  contact: {
    type: Contact,
    label: "Kontakt"
  }
}));
