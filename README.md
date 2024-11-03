# PuchuuNET

Launch Checklist
 Abilities:
    Inherents
    Perks
    Powers
    Spells
    Patrons
    Monsters
    Corrupt Powers
    Corrupt Monsters
    Chaos Spells
 Non-Ability Actions:
    Life, Death and Reincarnation (Muster Willpower/Surrender/Die)
    Chaos Statis equivalents
 Enhancements/Equipment Upgrades:
    Weapon Enhancements
    Outfit Enhancements
    Corrupt Weapon Enhancements
    Augments
    Trinket Alterations
 Items:
    Mundane Weapons
    Mundane Outfits
    Items
    (stretch goal) Relics
 Other Rules Text:
    Ability breakdown reference
    Ability Type definitions
    Effect Keywords definitions
    Weapon Details
    Outfit Details
    Linkages
    Conditions

Dice Roller Wishlist:
    current dicebot examples:
            ---
            user: +dice 17d4+59 4d6 1d100 17d4+59 4d6 1d100
            ​I rolled those dice for you and got:
            17D4+59: [4, 1, 2, 3, 3, 2, 1, 4, 4, 4, 2, 2, 1, 2, 1, 4, 1] +59 totaling 100
            4D6: [4, 3, 4, 5]  totaling 16
            1D100: [35]  totaling 35
            17D4+59: [3, 2, 3, 4, 2, 3, 4, 4, 3, 3, 3, 2, 2, 4, 3, 2, 4] +59 totaling 110
            4D6: [5, 6, 5, 4]  totaling 20
            1D100: [92]  totaling 92
            The total of all the dice is 373
            ---
            user:  +dice 17d4+59 4d6 1d100
                +dice 17d4+59 4d6 1d100
                +dice 17d4+59 4d6 1d100
            ​Unfortunately I can only roll 6 sets of dice at a time.
            ---
            user: +dice 10d12
            ​I rolled those dice for you and got:
            10D12: [4, 1, 1, 5, 8, 4, 6, 8, 8, 10]  totaling 55
            I also counted the dice for you: {4: 2, 1: 2, 5: 1, 8: 3, 6: 1, 10: 1}
            ---
    Ability to accept multiple arguments
        "1d6+4-2+6+etc..."
    Sensible dice limits for SCS purposes (i.e. more than 6 sets at once, more than 50 or 100 at a time)
    Better sorting
        when counting die, provide results in numerical order
            example 3 current text:
                {4: 2, 1: 2, 5: 1, 8: 3, 6: 1, 10: 1}
            modified for ascending numerical order:
                {1: 2, 2: 0, 3: 0, 4: 2, 5: 1, 6: 1, 7: 0, 8: 3, 9: 0, 10: 1, 11: 0, 12: 0}
            possible alternative presentation:
                |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 | 10 | 11 | 12 |
                -------------------------------------------------------------
                |  2 |  0 |  0 |  2 |  1 |  1 |  0 |  3 |  0 |  1 |  0 |  0 |
                or some such nonsense; there are options here
    Ability to define order of operations
        for things where dice rolls early in an ability depend on dice rolls later in the ability; will have to expand on what this might mean when I get here
    Option to select which form of output you want, probably default to providing rolls + total, i.e.:
        10D12: [4, 1, 1, 5, 8, 4, 6, 8, 8, 10]  totaling 55
