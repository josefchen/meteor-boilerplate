import { Meteor } from 'meteor/meteor';
import { validateUser } from '../imports/api/users';

import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
  validateUser();

});