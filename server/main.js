import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";

const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
      "Eighth Task",
      "Ninth Task",
      "Tenth Task",
      "Eleventh Task",
      "Twelfth Task",
      "Thirteenth Task",
      "Fourteenth Task",
      "Fifteenth Task",
      "Sixteenth Task",
      "Seventeenth Task",
      "Eighteenth Task",
      "Nineteenth Task",
      "Twentieth Task",
    ].forEach(insertTask);
  }
});
