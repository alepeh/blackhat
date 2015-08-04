/*****************************************************************************/
/* ListInspectionReports: Event Handlers */
/*****************************************************************************/
Template.ListInspectionReports.events({
    'click button': function(){
        console.log(this);
        Jobs.insert({
            type: "Kaminbefund",
            payload_object_id: this._id,
            status: "CREATED"
        });
    }
});

/*****************************************************************************/
/* ListInspectionReports: Helpers */
/*****************************************************************************/
Template.ListInspectionReports.helpers({
    inspection_reports: function() {
        return InspectionReports.find();
    }
});

/*****************************************************************************/
/* ListInspectionReports: Lifecycle Hooks */
/*****************************************************************************/
Template.ListInspectionReports.created = function () {
};

Template.ListInspectionReports.rendered = function () {
};

Template.ListInspectionReports.destroyed = function () {
};
