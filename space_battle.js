// REMEMBER COMMENTS!!!!!!

// Math.floors —  round roll to the first decimal point ex : 0.5, 0.7, 0.8.  Use your die roller to make enemy stats, use a class to generate and save?  

// Turns - flip back and forth through a loop to fight. 

// Every fight happens in the same loops.

// Stats: hull, firepower, accuracy (between 0 and 1, 0.8 for enemies, 0.7 for player)
// PC: Ship name: USS Schwarzenegger, * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7`

// Alien names: captain: Warf, Xorn, Orion, Gargamell, Phobos, Dylon.
//Alien Ships: **The alien ships** should each have the following _ranged_ properties determined randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` You could be battling six alien ships each with unique values. Example use of **accuracy** to determine a hit: ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```

// Options : **Attack** : if attack >= 0.7(Hit and subtract 

