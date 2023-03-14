# Pokemon Classes Game

## What are the features we want to implement? 

We want to make two main classes, one for trainers and one for pokemon. Then extend one of them. Gym leader? Electric type? Legendary?

*Let's at least make it possible to catch a pokemon!*

### 1. Trainer Class
- Properties
	- Name
    - Age
    - Badges
	- Inventory
    - Team
	- Methods
		- gettingCaught
		- getNickname
		- static getPokemonStats
2. Pokemon Class
	- Properties
	    - Name
	    - Type
	    - Nickname
	    - Number
	- Methods
		- getTeamNames
		- attemptToCatch
3. Gym Leader class (Trainer child)
	 - Properties
		 - Name
		 - Type
		 - Gym Location
		 - Team
		 - Inventory
		 - badgesGiven
	- Methods
		- getTeamNames