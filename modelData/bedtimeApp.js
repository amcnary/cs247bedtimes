"use strict";
/* jshint node: true */
/*
 * Model data for Activities Generate - the pre-bedtime activity 
 * generating site.
 * This module returns an object called activities with the following functions:
 *
 * TODO: Fill in with actual data
 * cs142Models.userListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   id  (number) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 */
(function() {
   // Create initial activities.
   // var activity1 = {name: 'Coloring', rating: 3.0, file_name: 'drawing.JPG', activity_level: 'low', tag: 'creative', duration: 15, id: 1};
   // var activity2 = {name: 'Building something', rating: 3.0, file_name: 'building_blocks.JPG', activity_level: 'medium', tag: 'creative', duration: 30, id: 2};
   // var activity3 = {name: 'Photo storytelling', rating: 3.0, file_name: 'photo_storytelling.JPG', activity_level: 'low', tag: 'creative', duration: 15, id: 3};
   // var activity4 = {name: 'The listening game', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'creative', duration: 30, id: 4};
   // var activity5 = {name: 'Shadow Puppets', rating: 3.0, file_name: 'shadow_puppets.JPG', activity_level: 'low', tag: 'creative', duration: 30, id: 5};
   // var activity6 = {name: 'Board Games', rating: 3.0, file_name: '', activity_level: 'low', tag: 'educational', duration: 60, id: 6};
   // var activity7 = {name: 'Card Games', rating: 3.0, file_name: '', activity_level: 'low', tag: 'educational', duration: 60, id: 7};
   // var activity8 = {name: 'Brain Teasers', rating: 3.0, file_name: '', activity_level: 'low', tag: 'educational', duration: 60, id: 8};
   // var activity9 = {name: 'Tickle Monster', rating: 3.0, file_name: 'tickle_monster.JPG', activity_level: 'medium', tag: 'funny', duration: 15, id: 9};
   // var activity10 = {name: 'Pillow Fight', rating: 3.0, file_name: 'pillow_fight.JPG', activity_level: 'high', tag: 'funny', duration: 15, id: 10};
   // var activity11 = {name: 'Furniture Hot Lava Monster', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'funny', duration: 15, id: 11};
   // var activity12 = {name: 'Hot Potato', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'funny', duration: 15, id: 12};
   // var activity13 = {name: 'Dance Party', rating: 3.0, file_name: 'dance_party.JPG', activity_level: 'high', tag: 'musical', duration: 30, id: 13};
   // var activity14 = {name: 'Freeze!', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'musical', duration: 15, id: 14};
   // var activity15 = {name: 'Singing songs', rating: 3.0, file_name: 'singing.JPG', activity_level: 'low', tag: 'musical', duration: 15, id: 15};
   // var activity16 = {name: 'Stargazing', rating: 3.0, file_name: 'stargazing.JPG', activity_level: 'low', tag: 'outdoors', duration: 30, id: 16};
   // var activity17 = {name: 'A night walk', rating: 3.0, file_name: 'night_walk.JPG', activity_level: 'medium', tag: 'outdoors', duration: 60, id: 17};
   // var activity18 = {name: 'Hide & Seek', rating: 3.0, file_name: 'hide_and_seek.JPG', activity_level: 'medium', tag: 'physical', duration: 30, id: 18};
   // var activity19 = {name: 'Parent "weight lifting"', rating: 3.0, file_name: '', activity_level: 'high', tag: 'physical', duration: 15, id: 19};
   // var activity20 = {name: 'Yoga/stretching', rating: 3.0, file_name: 'yoga.JPG', activity_level: 'medium', tag: 'physical', duration: 15, id: 20};
   // var activity21 = {name: 'a DIY balance beam', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'physical', duration: 15, id: 21};
   // var activity22 = {name: 'Gymnastics', rating: 3.0, file_name: '', activity_level: 'high', tag: 'physical', duration: 15, id: 22};
   // var activity23 = {name: 'Indoor hopscotch', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'physical', duration: 15, id: 23};
   // var activity24 = {name: 'Building a Blanket Fort', rating: 3.0, file_name: 'blanket_fort.jpg', activity_level: 'medium', tag: 'teamwork-related', duration: 30, id: 24};
   // var activity25 = {name: 'Flashlight tag', rating: 3.0, file_name: 'flashlight_tag.JPG', activity_level: 'medium', tag: 'teamwork-related', duration: 15, id: 25};
   // var activity26 = {name: 'Puzzles', rating: 3.0, file_name: '', activity_level: 'low', tag: 'teamwork-related', duration: 60, id: 26};
   // var activity27 = {name: 'A treasure hunt', rating: 3.0, file_name: '', activity_level: 'medium', tag: 'teamwork-related', duration: 60, id: 27};

   var activity1 = {name: 'Coloring', rating: 3.0, file_name: 'drawing.JPG', activity_level: 'low', tag: 'creative', duration: 15, id: 1};
   var activity2 = {name: 'Building something', rating: 3.0, file_name: 'building_blocks.JPG', activity_level: 'low', tag: 'creative', duration: 30, id: 2};
   var activity3 = {name: 'Photo storytelling', rating: 3.0, file_name: 'photo_storytelling.JPG', activity_level: 'low', tag: 'creative', duration: 15, id: 3};
   var activity4 = {name: 'The listening game', rating: 3.0, file_name: '', activity_level: 'low', tag: 'creative', duration: 30, id: 4};
   var activity5 = {name: 'Shadow Puppets', rating: 3.0, file_name: 'shadow_puppets.JPG', activity_level: 'low', tag: 'creative', duration: 30, id: 5};
   var activity6 = {name: 'Board Games', rating: 3.0, file_name: '', activity_level: 'low', tag: 'educational', duration: 30, id: 6};
   var activity7 = {name: 'Card Games', rating: 3.0, file_name: '', activity_level: 'low', tag: 'educational', duration: 30, id: 7};
   var activity8 = {name: 'Brain Teasers', rating: 3.0, file_name: '', activity_level: 'low', tag: 'educational', duration: 30, id: 8};
   var activity9 = {name: 'Tickle Monster', rating: 3.0, file_name: 'tickle_monster.JPG', activity_level: 'high', tag: 'funny', duration: 15, id: 9};
   var activity10 = {name: 'Pillow Fight', rating: 3.0, file_name: 'pillow_fight.JPG', activity_level: 'high', tag: 'funny', duration: 15, id: 10};
   var activity11 = {name: 'Furniture Hot Lava Monster', rating: 3.0, file_name: '', activity_level: 'high', tag: 'funny', duration: 15, id: 11};
   var activity12 = {name: 'Hot Potato', rating: 3.0, file_name: '', activity_level: 'low', tag: 'funny', duration: 15, id: 12};
   var activity13 = {name: 'Dance Party', rating: 3.0, file_name: 'dance_party.JPG', activity_level: 'high', tag: 'musical', duration: 30, id: 13};
   var activity14 = {name: 'Freeze!', rating: 3.0, file_name: '', activity_level: 'high', tag: 'musical', duration: 15, id: 14};
   var activity15 = {name: 'Singing songs', rating: 3.0, file_name: 'singing.JPG', activity_level: 'low', tag: 'musical', duration: 15, id: 15};
   var activity16 = {name: 'Stargazing', rating: 3.0, file_name: 'stargazing.JPG', activity_level: 'low', tag: 'outdoors', duration: 30, id: 16};
   var activity17 = {name: 'A night walk', rating: 3.0, file_name: 'night_walk.JPG', activity_level: 'high', tag: 'outdoors', duration: 30, id: 17};
   var activity18 = {name: 'Hide & Seek', rating: 3.0, file_name: 'hide_and_seek.JPG', activity_level: 'low', tag: 'physical', duration: 30, id: 18};
   var activity19 = {name: 'Parent "weight lifting"', rating: 3.0, file_name: '', activity_level: 'high', tag: 'physical', duration: 15, id: 19};
   var activity20 = {name: 'Yoga/stretching', rating: 3.0, file_name: 'yoga.JPG', activity_level: 'low', tag: 'physical', duration: 15, id: 20};
   var activity21 = {name: 'a DIY balance beam', rating: 3.0, file_name: '', activity_level: 'low', tag: 'physical', duration: 15, id: 21};
   var activity22 = {name: 'Gymnastics', rating: 3.0, file_name: '', activity_level: 'high', tag: 'physical', duration: 15, id: 22};
   var activity23 = {name: 'Indoor hopscotch', rating: 3.0, file_name: '', activity_level: 'high', tag: 'physical', duration: 15, id: 23};
   var activity24 = {name: 'Building a Blanket Fort', rating: 3.0, file_name: 'blanket_fort.jpg', activity_level: 'low', tag: 'teamwork-related', duration: 30, id: 24};
   var activity25 = {name: 'Flashlight tag', rating: 3.0, file_name: 'flashlight_tag.JPG', activity_level: 'high', tag: 'teamwork-related', duration: 15, id: 25};
   var activity26 = {name: 'Puzzles', rating: 3.0, file_name: '', activity_level: 'low', tag: 'teamwork-related', duration: 30, id: 26};
   var activity27 = {name: 'A treasure hunt', rating: 3.0, file_name: '', activity_level: 'low', tag: 'teamwork-related', duration: 30, id: 27};


   var activities = [activity1, activity2, activity3, activity4, 
                     activity5, activity6, activity7, activity8, 
                     activity9, activity10, activity11, activity12, 
                     activity13, activity14, activity15, activity16, 
                     activity17, activity18, activity19, activity20, 
                     activity21, activity22, activity23, activity24, 
                     activity25, activity26, activity27];

   var activitiesListModel = function() {
      return activities;
   }

   var activitiesFilteredModel = function(duration, activity_level, tag) {
      var activitiesToReturn = [];
      for(var i = 0; i < activities.length; i++) {
         if(activities[i]['tag'] == tag) {
         // if(activities[i]['duration'] == duration 
         //    && activities[i]['tag'] == tag) {
            if(activities[i]['activity_level'] == activity_level || activity_level == 'any')
               activitiesToReturn.push(activities[i]);
         }
      }
      return activitiesToReturn;
   }

   var activityByIdModel = function(activityId) {
      var activityToReturn;
      for(var i = 0; i < activities.length; i++) {
         if(activities[i]['id'] == activityId) {
            activityToReturn = activities[i];
            break;
         }
      }
      return activityToReturn;
   }

   var bedtimeModels = {
      activitiesList: activitiesListModel,
      activitiesFiltered: activitiesFilteredModel,
      activityById: activityByIdModel
   }

   if(typeof exports !== 'undefined') {
      exports.bedtimeModels = bedtimeModels;
   } else {
      window.bedtimeModels = bedtimeModels;
   }

})();
