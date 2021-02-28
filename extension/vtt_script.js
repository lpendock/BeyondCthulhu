console.log("Testing");

message = {
    "action": "hp-update",
    "character": {
      "name": "Azrak Erôth",
    },
    "type": "attack",
    "roll": "1d4+4",
    "advantage": 0,
    "whisper": 0,
    "name": "Rifle",
    "attack-source": "item",
    "description": "Proficiency with a longbow allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
    "rollAttack": true,
    "rollDamage": true,
    "rollCritical": false,
    "to-hit": "+5",
    "range": "150ft./600ft.",
    "attack-type": "Ranged",
    "properties": [
      "Ammunition",
      "Heavy",
      "Range",
      "Two-Handed"
    ],
    "damages": [
      "10d8+1"
    ],
    "damage-types": [
      " Piercing"
    ],
    "critical-damages": [
      "1d8"
    ],
    "critical-damage-types": [
      " Piercing"
    ],
    "item-type": "Weapon, Common",
    "preview": "https://media-waterdeep.cursecdn.com/attachments/2/742/weapon.jpg"
  };

/*
By dispatching events using the sendCustomEvent function we can roll using Beyond20's system. Unfortunately, modifying the "roll" field on
the roll object doesn't change the die used. It will always be a d20 although we can change the modifier. Using a different system, like the
Call of Cthulhu system we're intending to use might change the die.
*/

var thisBrowser = getBrowser();
console.log(thisBrowser);
sendCustomEvent("Roll", [message]);

// Taken from https://stackoverflow.com/questions/45985198/the-best-practice-to-detect-whether-a-browser-extension-is-running-on-chrome-or;
function getBrowser() {
  if (typeof (chrome) !== "undefined") {
      if (typeof (browser) !== "undefined") {
          return "Firefox";
      } else {
          return "Chrome";
      }
  } else {
      return "Edge";

  }
}

function sendCustomEvent(name, data=[]) {
  if (getBrowser() === "Firefox")
      data = cloneInto(data, window);
  const event = new CustomEvent("Beyond20_" + name, { "detail": data });
  document.dispatchEvent(event);
}