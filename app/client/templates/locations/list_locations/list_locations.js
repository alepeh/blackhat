/*****************************************************************************/
/* ListLocations: Event Handlers */
/*****************************************************************************/
Template.ListLocations.events({
});

/*****************************************************************************/
/* ListLocations: Helpers */
/*****************************************************************************/
Template.ListLocations.helpers({
    locations: function() {
        return Locations.find();
    }
});

/*****************************************************************************/
/* ListLocations: Lifecycle Hooks */
/*****************************************************************************/
Template.ListLocations.created = function () {
};

Template.ListLocations.rendered = function () {
};

Template.ListLocations.destroyed = function () {
};
