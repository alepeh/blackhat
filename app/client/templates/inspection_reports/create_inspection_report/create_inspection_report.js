/*****************************************************************************/
/* CreateInspectionReport: Event Handlers */
/*****************************************************************************/
Template.CreateInspectionReport.events({
});

/*****************************************************************************/
/* CreateInspectionReport: Helpers */
/*****************************************************************************/
Template.CreateInspectionReport.helpers({
    selectedLocation: function(){
        return Session.get('location');
    }
});

/*****************************************************************************/
/* CreateInspectionReport: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateInspectionReport.created = function () {
};

Template.CreateInspectionReport.rendered = function () {
};

Template.CreateInspectionReport.destroyed = function () {
};
