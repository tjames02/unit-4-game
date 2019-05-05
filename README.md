# unit-4-game
Crystal Game - JQuery

This is a fun and interactive game for web browsers. The page is dynamically updated with the jQuery library.

Here's how the game works:

There are four crystals displayed as buttons on the page.

The player is shown a random number at the start of the game.

When the player clicks on a crystal, it adds a specific amount of points to the player's total score.

The game hides this amount until the player clicks a crystal.

When the player clicks a crystal, the page updates the player's score counter.

The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, a new random number is displayed. Also, all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero.

The game shows the number of games the player wins and loses. To that end, the player should not refresh the page as a means to restart the game.

Game design notes:

The random number shown at the start of the game is between 19 - 120.

Each crystal has a random hidden value between 1 - 12.