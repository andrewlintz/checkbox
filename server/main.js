import { Meteor } from 'meteor/meteor';
import { List } from '/imports/both/List';

Meteor.startup(() => {
  if (List.find().count() === 0) {
    [ { name: 'Bob', cb1: true, cb2: false, cb3: false },
      { name: 'Ted', cb1: false, cb2: false, cb3: true },
      { name: 'Carol', cb1: false, cb2: true, cb3: false },
      { name: 'Alice', cb1: true, cb2: true, cb3: true },
    ].forEach(doc => {
      List.insert(doc);
    });
  }
});
