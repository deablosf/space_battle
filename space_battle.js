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

//BONUSES = Build shields and the ability to burnthrough shields to get two attacks!
//Prompt ( fire the Laser cannons[acc: normal, Firepower: 5 ] on launch a buster torpedo [inventory: 4, acc: high, firepower: 4 but does splash damage of 1 to own ship].

//Shields: will take damage first then hit the hull.
// The players character and ship stats
const PC = {
    name: '',
    ship: 'Uss Schwarzenegger',
    hull: 20,
    firepower: 5,
    acc: 0.7,
    payload: 4, //the acc will be the normal acc - 0.2 and do 4 damage
    shield: 10,
    action: "none"
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
    var min = 0.4,
        max = 1.0,
        highlightedNumber = Math.random() * (max - min) + min;
        att = highlightedNumber.toFixed(1)
    return att;
};
// Randomized enemy health and firepower
let enemyBuild = (min, max) => {
    var min = min,
        max = max,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

// Randomized enemy accuaracy
let enemyAcc = () => {
    var min = 0.6,
        max = 0.9,
        highlightedNumber = Math.random() * (max - min) + min;
        accE = highlightedNumber.toFixed(1);
        return accE
};

// Enemies will figure out to put them in an array that feeds into the constructor.
let enemy1 = new Enemy("Xorn", enemyBuild(3, 7), enemyBuild(2, 5), enemyAcc())

let enemy2 = new Enemy("Warf", enemyBuild(3, 7), enemyBuild(2, 5), enemyAcc())

let enemy3 = new Enemy("Orion", enemyBuild(3, 7), enemyBuild(2, 5), enemyAcc())

let enemy4 = new Enemy("Gargamell", enemyBuild(3, 7), enemyBuild(2, 5), enemyAcc())

let enemy5 = new Enemy("Dylon", enemyBuild(3, 7), enemyBuild(2, 5), enemyAcc())

let enemy6 = new Enemy("Phobos", enemyBuild(3, 7), enemyBuild(2, 5), enemyAcc())

let currentE = enemy1
let turn = 1;

// Quick peek at current player's stats
let pcStats = () => {
    now = PC.ship + " -- Hull:[" + PC.hull + "] Firepower:[" + PC.firepower + "] Accuracy:[" + PC.acc + "] Shields:[" + PC.shield + "]";
    return now
}
// Quick peek at current enemy's stats
let enemyStats = () => {
    now = "Enemy Ship -- Hull:[" + currentE.hull + "] Firepower:[" + currentE.firepower + "] Accuracy:[" + currentE.acc + "]";
    return now
}
// player attack option
let torpedo = () => {
    if (PC.payload === 0){
        window.alert("We're out of torpedoes, it'll take some time to fabricate more!")
    } else if (rollAttack() >= PC.acc - 0.2){
        PC.payload -=1;
        currentE.hull -=4;
        PC.hull -=1;
        window.alert("Direct Hit!\n" + enemyStats() + "\n" + "Torpedos remaining:" + PC.payload);
        PC.action = "none";
        turn +=1;
    } else {
        PC.payload -=1;
        window.alert("Missed! Enemy ship is charging weapons!" + "\n" + "Torpedos remaining: " + PC.payload);
        PC.action = "none";
        turn +=1;
    }
}
// player attack option
let cannons = () => {
    if (rollAttack() >= PC.acc){
        currentE.hull -= PC.firepower;
        window.alert("Direct Hit!\n" + enemyStats());
        PC.action = "none";
        turn +=1;
    } else {
        window.alert("Missed! Enemy ship is charging weapons!");
        PC.action = "none";
        turn +=1;
    }

}
// the enemy attack 
let enemyattack = () => {
    if (rollAttack() >= 0.9 && turn < 3) {
        window.alert("Helsmen: 'Captain, There's a strange build up of energy coming from the enemy ship!' " + "")
        window.alert("Helsmen: 'Captain, There's a Strange build up- wait what?")
        turn +=1;
        } else if (rollAttack() >= currentE.acc){
            if (PC.shield - currentE.firepower > 0){
                PC.shield -= currentE.firepower;
                window.alert("We're Hit!\n" + pcStats());
                turn -=1;
            } else if (PC.shield - currentE.firepower < 0) {
            PC.hull -= (currentE.firepower - PC.shield);
            PC.shield = 0;
            window.alert("We're Hit!\n" + pcStats());
            turn -=1;
        } 
        } else if (rollAttack() >= 0.9 && turn < 3) {
        window.alert("Helsmen: 'Captain, There's a strange build up of energy coming from the enemy ship!' " + "")
        window.alert("Helsmen: 'Captain, There's a Strange build up- wait what?")
        turn +=1;     
    } else {
        window.alert("We Narrowly avoided that one!");
        turn -=1;
    }
}
//the fight loop
let fight = () => {
    if (action == null || action == "" || action == "flee") {
        window.alert("The USS Schwarzenegger scram throster come online and the warship B lines it back to earth!");
        PC,hull -= 25;
        } else {
            while (PC.hull > 0 && currentE.hull > 0) {
                if (turn <= 1){
                    PC.action = prompt(enemyStats() + "\nFirst officer: 'We still have Laser cannons and maybe some torpedoes' ", "cannons or torpedoes")
                    if (PC.action == "cannons") {
                        cannons();
                    } else if (PC.action == "torpedoes") {
                        torpedo();
                        }
                        
                    } else if (turn >= 2) {
                        enemyattack()
                        
                        
                 }
            
            }
        }
    }

// - - - - - - - - - - - - - - - -  BEGINNING OF GAME - - - - - - - - - - - - - - - -
while (PC.hull > 0) {
   
window.alert("Welcome to space battle. \nEarth has been attacked by a horde of aliens! You are a fresh new lieutenant that has been stationed on the USS Schwarzenegger. It's been a quiet patro-");

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
        if (PC.shield >= 6){
            PC.shield = 10;
        } else if (PC.shield < 6) {
			PC.shield +=4;
        };
        if (PC.payload <= 3){
            PC.payload +=1;
        };
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
    if (PC.shield >= 6){
        PC.shield = 10;
    } else if (PC.shield < 6) {
        PC.shield +=4;
    };
    if (PC.payload <= 3){
        PC.payload +=1;
    };
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
    if (PC.shield >= 6){
        PC.shield = 10;
    } else if (PC.shield < 6) {
        PC.shield +=4;
    };
    if (PC.payload <= 3){
        PC.payload +=1;
    };
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
        if (PC.shield >= 6){
            PC.shield = 10;
        } else if (PC.shield < 6) {
			PC.shield +=4;
        };
        if (PC.payload <= 3){
            PC.payload +=1;
        };
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
        if (PC.shield >= 6){
            PC.shield = 10;
        } else if (PC.shield < 6) {
			PC.shield +=4;
        };
        if (PC.payload <= 3){
            PC.payload +=1;
        };
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
    window.alert("First Officer:'... All Enemy ships destroyed Captain. We WON!' \n\nThe crew of the " + PC.ship + " celebrate a battle well fought. On the way back to earth a moment of silence is held for those lost and you are offically promoted to Captain'\n")
    window.alert("Alert! \nAlert!\nAlert!");
        window.alert("Helmsman: 'Sorry, wrong button. Now beginning landing protocol, Home Sweet Home.' ")
        break;
}
    
}

window.alert("Game Over")
Window.confirm("Do you want to play again?")