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

   var activity1 = {name: 'Coloring', rating: 3.0, description:'',link:'',file_name: 'drawing.JPG', activity_level: 'low', tag: 'creative', duration: 15, id: 1};
   var activity2 = {name: 'Building something', rating: 3.0, description: 'Build something using legos, blocks, Shopkins, creative train sets ,spaghetti, marshmallows, popsicle sticks, cards, or whatever you have around.', link:'', file_name: 'building_blocks.JPG', activity_level: 'low', tag: 'creative', duration: 30, id: 2};
   var activity3 = {name: 'Photo storytelling', rating: 3.0, description: '', link:'',file_name: 'photo_storytelling.JPG', activity_level: 'low', tag: 'creative', duration: 15, id: 3};
   var activity4 = {name: 'The listening game', rating: 3.0, description: 'Take out several miscellaneous items. Have the children look at all the items, and then take them away. Next, ask one child to hide his or her eyes and listen as you pick up an item and make sounds with it. Ask the child to guess which item made the sound. Examples of items might be a comb (run your fingers along it), a glass (gently tap it), cymbals, shakers, sandpaper, blocks rubbed together, a pot and spoon. Be creative and have fun!',link:'',file_name: 'listening.jpg', activity_level: 'low', tag: 'creative', duration: 30, id: 4};
   var activity5 = {name: 'Shadow Puppets', rating: 3.0, description: 'Learn how to use your hands and a light source to create shadow puppets', link:'https://www.youtube.com/watch?v=Kz8wP2RYy64',file_name: 'shadow_puppets.JPG', activity_level: 'low', tag: 'creative', duration: 30, id: 5};
   var activity6 = {name: 'Board Games', rating: 3.0,description: 'Scrabble,The Game of Life,Chutes and Ladders, more', link:'http://fun.familyeducation.com/slideshow/board-games/48954.html',file_name: 'board.jpg', activity_level: 'low', tag: 'educational', duration: 30, id: 6};
   var activity7 = {name: 'Card Games', rating: 3.0, description: 'Uno, Monopoly Junior, Exploding Kittens, more', link: 'http://www.netmums.com/activities/free-family-fun/easy-card-games',file_name: 'card.jpg', activity_level: 'low', tag: 'educational', duration: 30, id: 7};
   var activity8 = {name: 'Brain Teasers', rating: 3.0, description: 'Find brain teasers for kids', link:'http://www.everythingmom.com/parenting/45-riddles-and-brain-teasers-for-kids',file_name: 'brain.jpg', activity_level: 'low', tag: 'educational', duration: 30, id: 8};
   var activity9 = {name: 'Tickle Monster', rating: 3.0, description: '', link: '', file_name: 'tickle_monster.JPG', activity_level: 'high', tag: 'funny', duration: 15, id: 9};
   var activity10 = {name: 'Pillow Fight', rating: 3.0, description: '', link: '', file_name: 'pillow_fight.JPG', activity_level: 'high', tag: 'funny', duration: 15, id: 10};
   var activity11 = {name: 'Furniture Hot Lava Monster',description:'Imagine that the floor is made of hot lava. Move from one piece of furniture to the next without falling to the ground. You will be out of the game if you touch the floor.',link:'', rating: 3.0, file_name: 'Hot_Lava.jpg', activity_level: 'high', tag: 'funny', duration: 15, id: 11};
   var activity12 = {name: 'Hot Potato', description:' Ask the kids to sit on the floor in a circle. Turn on some tunes and have them pass the potato (a bean bag or soft ball) around the circle as fast as they can. When the music stops, the player holding the potato leaves the circle. Keep going until only one player is left and wins the game.', link:'', rating: 3.0, file_name: 'potato.jpg', activity_level: 'low', tag: 'funny', duration: 15, id: 12};
   var activity13 = {name: 'Dance Party', rating: 3.0, description:'',link:'',file_name: 'dance_party.JPG', activity_level: 'high', tag: 'musical', duration: 30, id: 13};
   var activity14 = {name: 'Freeze!', rating: 3.0, description:'Choose some of your kids’ favourite tunes and turn up the volume. Ask them to dance until the music stops. When it does, they have to freeze in whatever position they find themselves in – even if they have one leg up. To make the game more challenging, ask the kids to freeze in specific poses: animals, shapes, letters or even yoga postures.',link:'', file_name: 'freeze.jpg', activity_level: 'high', tag: 'musical', duration: 15, id: 14};
   var activity15 = {name: 'Singing songs', rating: 3.0, description: '', link: '',file_name: 'singing.JPG', activity_level: 'low', tag: 'musical', duration: 15, id: 15};
   var activity16 = {name: 'Stargazing', rating: 3.0, description: 'Learn how to stargazing', link: 'http://www.skyandtelescope.com/astronomy-resources/stargazing-basics/family-projects-and-experiments/',file_name: 'stargazing.JPG', activity_level: 'low', tag: 'outdoors', duration: 30, id: 16};
   var activity17 = {name: 'A night walk', description:'',link:'',rating: 3.0, file_name: 'night_walk.JPG', activity_level: 'high', tag: 'outdoors', duration: 30, id: 17};
   var activity18 = {name: 'Hide & Seek', description:'One player closes his or her eyes for a brief period (often counting to 100) while the other players hide. The seeker then opens his eyes and tries to find the hiders; the first one found is the next seeker, and the last is the winner of the round.',link:'',rating: 3.0, file_name: 'hide_and_seek.JPG', activity_level: 'low', tag: 'physical', duration: 30, id: 18};
   var activity19 = {name: 'Family \"workout\"', description:'Learn how to workout with your kids',link:'http://www.huffingtonpost.com/2014/08/05/mom-exercises-with-kids-lauren-rodgers_n_5648970.html',rating: 3.0, file_name: 'work_out.jpg', activity_level: 'high', tag: 'physical', duration: 15, id: 19};
   var activity20 = {name: 'Yoga/stretching', description:'Learn yoga poses for kids ',link:'http://www.parents.com/fun/activities/indoor/yoga-for-kids/#page=1',rating: 3.0, file_name: 'yoga.JPG', activity_level: 'low', tag: 'physical', duration: 15, id: 20};
   var activity21 = {name: 'a DIY balance beam', description:'We all know how much kids love walking in straight lines every chance they get. Put on some music, and one at a time the kids can take their turn walking one-foot-over-the-other across the straight line of tape. Make the game more challenging by having the kids walk backwards or balance with one foot on the line.',link:'',rating: 3.0, file_name: 'Balance_Beam.png', activity_level: 'low', tag: 'physical', duration: 15, id: 21};
   var activity22 = {name: 'Gymnastics', description:'',link:'',rating: 3.0, file_name: 'Gymnastics.png', activity_level: 'high', tag: 'physical', duration: 15, id: 22};
   var activity23 = {name: 'Indoor hopscotch', description:' Boxes 1-3 will be placed in a single line, one on top of the other. The next two boxes (4, 5) will be placed side-by-side, followed by a single box (6), two more boxes (7, 8) and the final half-circle “home” base (9). Next, choose a marker, such as a coin, stone or beanbag. The first player will throw the marker into square 1 without letting it bounce or touch the lines. If successful, the player will then hop — one foot on single squares and two feet on side-by-side squares — avoiding square #1. The player may rest on “home” before hopping back. On the way back, he or she picks up the marker on square #1 and, if successful (lands within the lines, hops or jumps with proper footing, doesn’t fall), takes another turn and throws it into square #2. When the player is unsuccessful, the next player takes a turn. Players resume their turns by throwing the marker on the last box played. The winner is the first player to throw the marker home (#9), and smoothly complete the whole course.',link:'',rating: 3.0, file_name: 'hopscotch.png', activity_level: 'high', tag: 'physical', duration: 15, id: 23};
   var activity24 = {name: 'Building a Blanket Fort', description:'More ideas ',link:'http://www.todaysparent.com/family/activities/9-creative-indoor-forts/',rating: 3.0, file_name: 'blanket_fort.jpg', activity_level: 'low', tag: 'teamwork-related', duration: 30, id: 24};
   var activity25 = {name: 'Flashlight tag',description:'Learn how to play flashlight tag ',link:'http://www.wikihow.com/Play-Flashlight-Tag', rating: 3.0, file_name: 'flashlight_tag.JPG', activity_level: 'high', tag: 'teamwork-related', duration: 15, id: 25};
   var activity26 = {name: 'Puzzles', description:'Jigsaw puzzles, Tangram, Spot the Difference, Maze...',link:'',rating: 3.0, file_name: 'puzzle.jpg', activity_level: 'low', tag: 'teamwork-related', duration: 30, id: 26};
   var activity27 = {name: 'A treasure hunt', description:'Lace the first clue somewhere easy to find, like inside your child’s snack or cereal bowl. Then leave as many clues as you like around the house, making a trail to the final clue. Instead of a prize, the treasure hunt can lead to various coins around the house. This way the kids get to collect all the coins and put them in their piggy banks in the end. If you want to create the most amazing treasure hunt, follow ',link:'http://www.todaysparent.com/family/activities/tips-for-creating-an-awesome-treasure-hunt/',rating: 3.0, file_name: 'treasure_hunt.jpg', activity_level: 'low', tag: 'teamwork-related', duration: 30, id: 27};


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

   var activitiesCount = function() {
      return activities.length;
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
      activityById: activityByIdModel,
      activitiesCount: activitiesCount
   }

   if(typeof exports !== 'undefined') {
      exports.bedtimeModels = bedtimeModels;
   } else {
      window.bedtimeModels = bedtimeModels;
   }

})();
