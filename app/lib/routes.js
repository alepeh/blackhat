Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/locations', {
  name: 'listLocations',
  controller: 'LocationsController',
  action: 'list',
  where: 'client'
});

Router.route('/locations/create', {
  name: 'createLocation',
  controller: 'LocationsController',
  action: 'create',
  where: 'client'
});

Router.route('/inspection_reports/create', {
  name: 'createInspectionReport',
  controller: 'InspectionReportsController',
  action: 'create',
  where: 'client'
});
