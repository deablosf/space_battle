// REMEMBER COMMENTS!!!!!! ALERT BASED CHROME GaME

// Math.floors —  round roll to the first decimal point ex : 0.5, 0.7, 0.8.  Use your die roller to make enemy stats, use a class to generate and save?  

// Turns - flip back and forth through a loop to fight. 

// Every fight happens in the same loops.

// Stats: hull, firepower, accuracy (between 0 and 1, 0.8 for enemies, 0.7 for player)
// PC: Ship name: USS Schwarzenegger, * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7`

// Alien names: captain: Warf, Xorn, Orion, Gargamell, Phobos, Dylon.
//Alien Ships: **The alien ships** should each have the following _ranged_ properties determined randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` You could be battling six alien ships each with unique values. Example use of **accuracy** to determine a hit: ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```

// Options : **Attack** : if attack >= 0.7(Hit and subtract 

// let captains = ['Warf', 'Xorn', 'Orion', 'Gargamell', 'Phobos', 'Dylon']
// let capName = () => {
//     let i = Math.floor(Math.random()*captains,length)
//     return i; }




// The players character and ship stats


const PC = {
    name: '',
    ship: 'The Uss Schwarzenegger',
    hull: 20,
    firepower: 5,
    acc: 0.7
}

// Enemy constructor 
class Enemy {
    constructor(captain, hull, firepower,acc){
        this.captain = captain
        this.hull = hull //between 3 and 6
        this.firepower = firepower  //between 2 and 4
        this.acc = acc  //between 0.6 and 0.8

    }
}
// Random attack roll
let rollAttack = () => {
    var min = 0.5,
        max = 1.0,
        highlightedNumber = Math.random() * (max - min) + min;
        att = highlightedNumber.toFixed(1)
    return att;
};
// Randomized enemy healht
let enemyHull = () => {
    var min = 3,
        max = 7,
        health = Math.floor(Math.random() * (max - min) + min);
        return health;
    // console.log(score);
};
// Randomized enemy firepower
let enemyPower = () => {
    var min = 2,
        max = 5,
        power = Math.floor(Math.random() * (max - min) + min);
        return power
    // console.log(score);
};
// Randomized enemy accuaracy
let enemyAcc = () => {
    var min = 0.6,
        max = 0.8,
        highlightedNumber = Math.random() * (max - min) + min;
        acc = highlightedNumber.toFixed(1);
        return acc
    console.log(acc);
};

// Enemies
let enemy1 = new Enemy("Xorn", enemyHull(), enemyPower(), enemyAcc())

let enemy2 = new Enemy("Warf", enemyHull(), enemyPower(), enemyAcc())

let enemy3 = new Enemy("Orion", enemyHull(), enemyPower(), enemyAcc())

let enemy4 = new Enemy("Gargamell", enemyHull(), enemyPower(), enemyAcc())

let enemy5 = new Enemy("Dylon", enemyHull(), enemyPower(), enemyAcc())

let enemy6 = new Enemy("Phobos", enemyHull(), enemyPower(), enemyAcc())

let currentE = enemy1
let turn = 1;
// rollAttack();

window.alert("Welcome to space battle. \nEarth has been attacked by a horde of aliens! You a fresh leutenant have been stationed on the USS Schwarzenegger. It's been a quiet patro-");

window.alert("BOOOOOOOoooooooOOOOOOOOooooOOOOOoooOOOOOOOOM!")

window.alert("When you come to an older woman is looking at you disapointed" )

PC.name = prompt("What's your name Lt", "Bobby?")
if (PC.name == null || PC.name == "") {
    window.alert("You cerum to your wounds and die ... end.");
    } else {
     window.alert("Congrates Captian " + PC.name + "! Thanks to the last hull breach you've just been promoted.");
};

window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");


action = prompt("Captain " + currentE.captain + ": 'Your lifeless husks will litter the void!' \nEnemy Ship: [Hull:" + currentE.hull + "] [Firepower: " + currentE.firepower + "] [Accuracy: " + currentE.acc + "]\nUSS Terminator: [Hull: " + PC.hull + "] [Firepower: " + PC.firepower + "] [Accuracy: " + PC.acc + "]\nYour new first Officer looks at you.", "fight or flee?")
let fight = () => {
if (action == null || action == "" || action == "flee") {
    window.alert("The USS Schwarzenegger scram throster come online and the warship B lines it back to earth!")
    } else {
        while (PC.hull > 0 && currentE.hull > 0) {
            if (turn <= 1){
                if (rollAttack() >= PC.acc) {
                    currentE.hull -= PC.firepower;
                    window.alert("Direct Hit!");
                    turn +=1;
                    } else {
                        window.alert("Missed! Enemy ship is charging weapons!");
                        turn +=1;
                    }
                    
                } else if (turn >= 2) {
                    if (rollAttack() >= currentE.acc){
                        PC.hull -= currentE.firepower
                        window.alert("We're Hit!");
                        turn -=1;
                    } else {
                        window.alert("We Narrowly avoided that one!");
                        turn -=1;
                    }
                    
             }
        
        }
    }
}
fight()