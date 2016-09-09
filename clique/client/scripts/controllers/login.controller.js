import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';



export default class LoginCtrl extends Controller {
  constructor() {
    super(...arguments);

  }
  getFBAuth(){}
  
}

LoginCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate'];
