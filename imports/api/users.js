import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

export const validateUser = () => {
    Accounts.validateNewUser((user) => {


    return true;
  });
}
