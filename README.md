# Udacity FEND - Project 3 - Arcade Game

## Game Criteria
Following criteria were to meet:
* Player can not move off screen
* Enemies cross the screen
* Enemy-player collisions happen logically (not too early or too late)
* Enemy-player collision resets the game.
* Something happens when player wins - in this case, the score is updated and the character returns back to the initial position

## External Resources

The visual character of the game (tiles, character, enemies) were provided by Udacity. To calculate Linear gradient, the resource https://cssgradient.io/ was used. In the scoreboard and in the closing modal, the Google font "Luckiest Guy" was used.
To start with the game, I watched and read following tutorials:
* https://matthewcranford.com/category/blog-posts/walkthrough/arcade-game/
* https://www.youtube.com/watch?v=XEVnMgYblGc
* https://www.youtube.com/watch?v=JcQYGbg0IkQ


## Conclusion
My major difficulty was to implement the winnig condition. First, I intended that the character stays on the water tile for a while and then it jumps back, but it increased the score value by the setTimeout value. So I decided to avoid setTimeout and just to implement the score.
I also initially started to transfer the enemy class to ES6, but this lead to errors, so I decided to roll back to the older version.
My further plans with the game are:
* To update speed of enemies as soon as the player reaches the initial position after the game is won
* Add gems
* Improve the design
