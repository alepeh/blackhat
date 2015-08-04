Jobs = new Mongo.Collection('jobs');


if (Meteor.isServer) {
  Jobs.allow({
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

Job = new SimpleSchema({
  type: {
    type: String,
    label: "Job Typ",
    max: 100
  },
  payload_object_id: {
    type: String,
    label: "Payload Objekt Id",
    max: 24
  },
  status: {
    type: String,
    label: "Status",
    max: 100
  }
});

Jobs.attachSchema(Job);

