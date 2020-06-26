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
    ship: 'Uss Schwarzenegger',
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
// Randomized enemy health
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

// Enemies will figure out to put them in an array that feeds into the constructor.
let enemy1 = new Enemy("Xorn", enemyHull(), enemyPower(), enemyAcc())

let enemy2 = new Enemy("Warf", enemyHull(), enemyPower(), enemyAcc())

let enemy3 = new Enemy("Orion", enemyHull(), enemyPower(), enemyAcc())

let enemy4 = new Enemy("Gargamell", enemyHull(), enemyPower(), enemyAcc())

let enemy5 = new Enemy("Dylon", enemyHull(), enemyPower(), enemyAcc())

let enemy6 = new Enemy("Phobos", enemyHull(), enemyPower(), enemyAcc())

let currentE = enemy1
let turn = 1;

// Quick peek at current player's stats
let pcStats = () => {
    now = PC.ship + " -- Hull:[" + PC.hull + "] Firepower:[" + PC.firepower + "] Accuracy:[" + PC.acc + "]";
    return now
}
// Quick peek at current enemy's stats
let enemyStats = () => {
    now = "Enemy Ship -- Hull:[" + currentE.hull + "] Firepower:[" + currentE.firepower + "] Accuracy:[" + currentE.acc + "]";
    return now
}
// FIGHT LOOP
let fight = () => {
    if (action == null || action == "" || action == "flee") {
        window.alert("The USS Schwarzenegger scram throster come online and the warship B lines it back to earth!");
        PC,hull -= 25;
        } else {
            while (PC.hull > 0 && currentE.hull > 0) {
                if (turn <= 1){
                    if (rollAttack() >= PC.acc) {
                        currentE.hull -= PC.firepower;
                        window.alert("Direct Hit!\n" + enemyStats());
                        turn +=1;
                        } else {
                            window.alert("Missed! Enemy ship is charging weapons!");
                            turn +=1;
                        }
                        
                    } else if (turn >= 2) {
                        if (rollAttack() >= currentE.acc){
                            PC.hull -= currentE.firepower
                            window.alert("We're Hit!\n" + pcStats());
                            turn -=1;
                        } else {
                            window.alert("We Narrowly avoided that one!");
                            turn -=1;
                        }
                        
                 }
            
            }
        }
    }


// - - - - - - - - - - - - - - - -  BEGINNING OF GAME - - - - - - - - - - - - - - - -

while (PC.hull > 0) {
   
window.alert("Welcome to space battle. \nEarth has been attacked by a horde of aliens! You a fresh new lieutenant that has been stationed on the USS Schwarzenegger. It's been a quiet patro-");

window.alert("BOOOOOOOoooooooOOOOOOOOooooOOOOOoooOOOOOOOOM!")

window.alert("When you come to you're on the main deck, in the captain's chair. An older woman is looking at you disappointed" )

PC.name = prompt("What's your name Lt", "Bobby?")
if (PC.name == null || PC.name == "") {
    window.alert("You succumb to your injuries and die ... end.");
    PC.hull -= 25;
    break; 
    } else {
     window.alert("Congrates Captian " + PC.name + "! Thanks to the last hull breach you've been promoted to acting Captain");
};

window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");

window.alert("Helmsman: 'Crap! Incoming Message!' ")

action = prompt("Captain " + currentE.captain + ": 'Your lifeless husks will litter the void!' \n\n" + enemyStats() + "]\n\n" + pcStats() + "\nYour new First Officer looks at you.", "fight or flee?")

fight()

if (PC.hull <= 0) {
    window.alert("GAME OVER");
    break;
} else if (currentE.hull <= 0) {
    window.alert("*Silence*\nFirst Officer: 'Talk about a lucky shot, way to go Cap " + PC.name + ".")
        turn -=1;
        currentE = enemy2;
        window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");
        window.alert("Helmsman: ' Here we go again! Incoming Message!' ")
}

action = prompt("Captain " + currentE.captain + ": 'My Brood will find your carcasses pleasing.' \n\n" + enemyStats() + "\n\n" + pcStats() + "\nYour crew looks at you.", "fight or flee?")

fight()


if (PC.hull <= 0) {
    window.alert("GAME OVER");
    break;
} else if (currentE.hull <= 0) {
    window.alert("'Sweet Christmas, WE WON!' The crew cheers, hugs and thanks their stars that Captain " + PC.name + " didn't get them all killed")
    turn -=1;
        currentE = enemy3
        window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");
        window.alert("Helmsman: 'Oh Fu-' ")
}

action = prompt("Captain " + currentE.captain + ": 'When I am done, you will be nothing more but a greasy smear across my sensor array.' \n\n" + enemyStats() + "\n\n" + pcStats() + "\nYour crew looks at you.", "fight or flee?")

fight()

if (PC.hull <= 0) {
    window.alert("GAME OVER");
    break;
} else if (currentE.hull <= 0) {
    window.alert("First Officer:'That's How We Do, THAT'S HOW WE DO!'\n*Slow chant*Captain " + PC.name + " Captain " + PC.name + "! Captai- ")
    turn -=1;
        currentE = enemy4;
        window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");
        window.alert("Helmsman: 'REALLY?!?' ")
}

action = prompt("Captain " + currentE.captain + ": 'You have proven yourself to be ... difficult. I will produce the solution to the problem that is your existance.' \n\n" + enemyStats() + "\n\n" + pcStats() + "\nYour crew looks confident that you will choose correctly", "fight or flee?")

fight()

if (PC.hull <= 0) {
    window.alert("GAME OVER");
    break;
} else if (currentE.hull <= 0) {
    window.alert("First Officer:'Shhh no one say anything!'\n*Silence*");
        turn -=1;
        currentE = enemy5;
        window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");
        window.alert("Helmsman: 'You know what, Come On, GET SOME!' ")
}

action = prompt("Captain " + currentE.captain + ": '" + enemy2.captain + " was my rookery sister, when I next see her, I will relay to her your death cries.' \n\n" + enemyStats() + "\n\n" + pcStats() + "\nHelmsman: 'Wow, I don't feel so good now ...' ", "fight or flee?");

fight()

if (PC.hull <= 0) {
    window.alert("GAME OVER");
    break;
} else if (currentE.hull <= 0) {
    window.alert("First Officer:'Communication from Earth Cap, we're the last ship in the area.'\n")
        turn -=1;
        currentE = enemy6;
        window.alert("Alert Enemy vessal approaching! \nAlert Enemy vessal approaching!\nAlert Enemy vessal approaching!");
        window.alert("Helmsman: 'Incoming ship sir looks like It's the last one too.' ")
}

action = prompt("Captain " + currentE.captain + ": 'We have been studing your vessal human and have built this one to match yours.\n\nYour skies will rain fire, your oceans will boil, your streets will run red with the blood of billions. Only then, after humanities last pitiful hope is extinguished, will we end their live. Let's Go. \n\n" + enemyStats() + "\n\n" + pcStats() + "\nYour crew is silent knowing there's only one answer to this", "fight")

fight()

if (PC.hull <= 0) {
    window.alert("GAME OVER");
    break;
} else if (currentE.hull <= 0) {
    window.alert("First Officer:'... All Enemy ships destroyed Captain. We WON!' \nThe crew of the " + PC.ship + " celebrate a battle well fought. On the way back to earth a moment of silence is held for those lost and you are offically promoted to Captain'\n")
    window.alert("Alert! \nAlert!\nAlert!");
        window.alert("Helmsman: 'Sorry, wrong button. Now beginning landing protocol, Home Sweet Home.' ")
        break;
}
    
}

window.alert("Game Over")