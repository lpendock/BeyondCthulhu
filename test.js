var data = {
    "action": "roll",
    "character": {
      "name": "Rasmus the Revolting",
      "avatar": "https://www.dndbeyond.com/avatars/7253/0/637049937213506935.png?width=150&height=150&fit=crop&quality=95&auto=webp",
      "id": "15844106",
      "type": "Character",
      "abilities": [
        [
          "Strength",
          "STR",
          "20",
          "+5"
        ],
        [
          "Dexterity",
          "DEX",
          "10",
          "+0"
        ],
        [
          "Constitution",
          "CON",
          "14",
          "+2"
        ],
        [
          "Intelligence",
          "INT",
          "12",
          "+1"
        ],
        [
          "Wisdom",
          "WIS",
          "16",
          "+3"
        ],
        [
          "Charisma",
          "CHA",
          "11",
          "+0"
        ]
      ],
      "classes": {
        "Cleric": "3"
      },
      "level": "3",
      "race": "Half-Orc",
      "ac": "18",
      "proficiency": "+2",
      "speed": null,
      "hp": 24,
      "max-hp": 24,
      "temp-hp": 0,
      "exhaustion": 0,
      "conditions": [],
      "settings": {
        "migrated-sync-settings": true,
        "versatile-choice": "both",
        "custom-roll-dice": "",
        "custom-damage-dice": "",
        "custom-critical-limit": "",
        "rogue-sneak-attack": true,
        "cleric-disciple-life": true,
        "bard-joat": true,
        "sharpshooter": false,
        "great-weapon-master": false,
        "brutal-critical": true,
        "barbarian-rage": false,
        "barbarian-divine-fury": true,
        "bloodhunter-crimson-rite": false,
        "ranger-dread-ambusher": false,
        "paladin-legendary-strike": false,
        "paladin-improved-divine-smite": true,
        "warlock-hexblade-curse": false,
        "rogue-assassinate": false,
        "fighter-giant-might": false,
        "artificer-arcane-firearm": false,
        "cleric-divine-strike": true,
        "bard-psychic-blades": false,
        "ranger-planar-warrior": false,
        "ranger-slayers-prey": false,
        "ranger-gathered-swarm": false,
        "protector-aasimar-radiant-soul": false,
        "wizard-bladesong": false,
        "fey-wanderer-dreadful-strikes": false,
        "champion-remarkable-athlete": true,
        "artificer-alchemical-savant": true,
        "paladin-invincible-conqueror": false,
        "wildfire-spirit-enhanced-bond": false,
        "last-features-classes": ""
      },
      "class-features": [],
      "racial-traits": [],
      "feats": [],
      "actions": [
        "Channel Divinity: Turn Undead",
        "Unarmed Strike",
        "War Priest",
        "Channel Divinity",
        "Channel Divinity: Guided Strike",
        "Relentless Endurance"
      ],
      "spell_modifiers": {},
      "spell_saves": {},
      "spell_attacks": {},
      "url": "https://www.dndbeyond.com/characters/15844106"
    },
    "type": "skill",
    "roll": "1d20+5",
    "advantage": 0,
    "whisper": 0,
    "skill": "Medicine",
    "ability": "WIS",
    "modifier": "+5",
    "proficiency": "Proficiency",
    "d20": "1d20"
  }

function myFunction() {
    extensionId="gnblbpbepfbfmoobegdogkglpbhcjofh";
    console.log("You just clicked something. Congrats, genius.");
    chrome.runtime.sendMessage(extensionId, data, (resp) => {
        if (!resp.success) {
            handleError(data);
        }
    });
}

