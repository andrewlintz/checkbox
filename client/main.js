import { Template } from 'meteor/templating';
import { List } from '/imports/both/List';

import './main.html';

Template.showList.helpers({
  all() {
    return List.find();
  }
});

Template.item.events({
  'click input'(event) {
    const obj = {};
    obj[event.currentTarget.name] = event.currentTarget.checked;
    List.update(this._id, { $set: obj } );
  },
});
