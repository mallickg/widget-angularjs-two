import angular from 'angular';

import '../style/app.scss';
import logoIcon from '../public/img/angular.png';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

let component = () => {
  return {
      bindings: {
          name: '='
      },
      controller: 'AppCtrl',
      controllerAs: 'app',
      template: require('./app.html')
  }
}

class AppCtrl {
  constructor() {
    this.name = 'Angular 1';
    this.logo = logoIcon;
  }
}

const MODULE_NAME = 'app2';

angular.module(MODULE_NAME, [])
  .controller('AppCtrl', AppCtrl)
  .component('widgetTwoAngularjsComponent', component());

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document.getElementById("widget2"), ['app2']);
});

export default MODULE_NAME;
