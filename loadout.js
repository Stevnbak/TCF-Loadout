/*var itemList = [];
fetch('./itemList.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => (itemList = data));*/

//Weapons
let allWeapons = [
    'PDW',
    'K28',
    'AR55',
    'BoltAction',
    'Trenchgun',
    'Scrapper',
    'Scarab',
    'Manticore',
    'Bulldog',
    'Guarantee',
    'ShardBurst',
    'Maelstrom',
    'PhasicLancer',
    'ASP',
    'Advocate',
    'Gorgon',
    'KBR Longshot',
    'Shattergun',
    'DragonSMG',
    'Kor47',
    'Basilisk',
    'KineticArbiter',
    'Hammer',
    'ZeusBeam',
    'KARMA-1',
    'Komrad',
];
//Based on ammo
let LightWeapons = ['ASP', 'Scrapper', 'PDW', 'DragonSMG', 'K28', 'Scarab'];
let MediumWeapons = ['Advocate', 'Gorgon', 'Kor47', 'Manticore', 'AR55', 'PhasicLancer', 'Guarantee', 'ZeusBeam', 'Hammer'];
let HeavyWeapons = ['ShardBurst', 'KBR Longshot', 'Basilisk', 'BoltAction', 'KineticArbiter', 'KARMA-1'];
let ShotgunWeapons = ['Maelstrom', 'Shattergun', 'Trenchgun', 'Bulldog'];
let SpecialWeapons = ['Komrad'];
//Based on rarity
let commonWeapons = ['PDW', 'K28', 'AR55', 'BoltAction', 'Trenchgun'];
let uncommonWeapons = ['Scrapper', 'Scarab', 'Manticore', 'Bulldog'];
let rareWeapons = ['Guarantee', 'ShardBurst', 'Maelstrom', 'PhasicLancer'];
let epicWeapons = ['ASP', 'Advocate', 'Gorgon', 'KBR Longshot', 'Shattergun'];
let exoticWeapons = ['DragonSMG', 'Kor47', 'Basilisk', 'KineticArbiter', 'Hammer'];
let legendaryWeapons = ['ZeusBeam', 'KARMA-1', 'Komrad'];

//Other Arrays
let Consumables = ['GrenadeFrag', 'GrenadeGas', 'GrenadeSmoke', 'GrenadeSound', 'MedkitCombat', 'MedkitStrong', 'MedkitWeak', 'StimCombat', 'StimStrong', 'StimWeak'];
let Backpacks = ['Common', 'Uncommon', 'Rare', 'Epic'];
let Shields = ['Common', 'Common_Tactical', 'Common_Restoration', 'Uncommon', 'Uncommon_Tactical', 'Uncommon_Restoration', 'Rare', 'Rare_Tactical', 'Rare_Restoration', 'Epic', 'Exotic'];
let Helmets = ['Common', 'Common_Tactical', 'Common_Restoration', 'Uncommon', 'Uncommon_Tactical', 'Uncommon_Restoration', 'Rare', 'Rare_Tactical', 'Rare_Restoration', 'Epic', 'Exotic', 'NightVision'];

function onLoad() {
    resetLoadout();
    RandomLoadout();
}

function RandomLoadout() {
    resetLoadout();
    let itemNumber = 1;
    let r;

    //Weapons
    let Weapon;
    let Rarity;
    let Ammo;
    let AmmoNumber;
    let tempWeaponArr = [...allWeapons];
    //Weapon 1
    Weapon = tempWeaponArr[Math.floor(Math.random() * tempWeaponArr.length)];
    delete tempWeaponArr[tempWeaponArr.indexOf(Weapon)];
    if (LightWeapons.includes(Weapon)) Ammo = 'Light';
    else if (MediumWeapons.includes(Weapon)) Ammo = 'Medium';
    else if (HeavyWeapons.includes(Weapon)) Ammo = 'Heavy';
    else if (ShotgunWeapons.includes(Weapon)) Ammo = 'Shotgun';
    else if (SpecialWeapons.includes(Weapon)) Ammo = 'Special';
    if (Ammo == 'Light' || Ammo == 'Medium') AmmoNumber = Math.floor(Math.random() * 249) + 1;
    if (Ammo == 'Shotgun' || Ammo == 'Heavy' || Ammo == 'Special') AmmoNumber = Math.floor(Math.random() * 49) + 1;
    if (commonWeapons.includes(Weapon)) Rarity = 'Common';
    else if (uncommonWeapons.includes(Weapon)) Rarity = 'Uncommon';
    else if (rareWeapons.includes(Weapon)) Rarity = 'Rare';
    else if (epicWeapons.includes(Weapon)) Rarity = 'Epic';
    else if (exoticWeapons.includes(Weapon)) Rarity = 'Exotic';
    else if (legendaryWeapons.includes(Weapon)) Rarity = 'Legendary';
    document.getElementById('Weapon1').src = 'Images/Weapons/' + Weapon + '.png';
    document.getElementById(`Item${itemNumber}`).src = 'Images/Ammo_' + Ammo + '.png';
    document.getElementById(`Item${itemNumber}Number`).innerText = AmmoNumber;
    itemNumber += 1;
    //Weapon 2
    Weapon = '';
    Ammo = '';
    AmmoNumber = 0;
    Weapon = tempWeaponArr[Math.floor(Math.random() * tempWeaponArr.length)];
    delete tempWeaponArr[tempWeaponArr.indexOf(Weapon)];
    if (LightWeapons.includes(Weapon)) Ammo = 'Light';
    else if (MediumWeapons.includes(Weapon)) Ammo = 'Medium';
    else if (HeavyWeapons.includes(Weapon)) Ammo = 'Heavy';
    else if (ShotgunWeapons.includes(Weapon)) Ammo = 'Shotgun';
    else if (SpecialWeapons.includes(Weapon)) Ammo = 'Special';
    if (Ammo == 'Light' || Ammo == 'Medium') AmmoNumber = Math.floor(Math.random() * 249) + 1;
    if (Ammo == 'Shotgun' || Ammo == 'Heavy' || Ammo == 'Special') AmmoNumber = Math.floor(Math.random() * 49) + 1;
    if (commonWeapons.includes(Weapon)) Rarity = 'Common';
    else if (uncommonWeapons.includes(Weapon)) Rarity = 'Uncommon';
    else if (rareWeapons.includes(Weapon)) Rarity = 'Rare';
    else if (epicWeapons.includes(Weapon)) Rarity = 'Epic';
    else if (exoticWeapons.includes(Weapon)) Rarity = 'Exotic';
    else if (legendaryWeapons.includes(Weapon)) Rarity = 'Legendary';
    if (Weapon != undefined) {
        document.getElementById('Weapon2').src = 'Images/Weapons/' + Weapon + '.png';
        document.getElementById(`Item${itemNumber}`).src = 'Images/Ammo_' + Ammo + '.png';
        document.getElementById(`Item${itemNumber}Number`).innerText = AmmoNumber;
        itemNumber += 1;
    }

    //Backpack
    let B = [...Backpacks];
    let Backpack;
    r = Math.floor(Math.random() * B.length);
    Backpack = B[r];
    if (Backpack) document.getElementById('Backpack').src = 'Images/Backpack_' + Backpack + '.png';

    //Shield
    let S = [...Shields];
    let Shield;
    if (Math.floor(Math.random() * 7) != 0) {
        r = Math.floor(Math.random() * S.length);
        Shield = S[r];
    }
    if (Shield) document.getElementById('Shield').src = 'Images/Shield_' + Shield + '.png';

    //Helmet
    let H = [...Helmets];
    let Helmet;
    if (Math.floor(Math.random() * 5) != 0) {
        r = Math.floor(Math.random() * H.length);
        Helmet = H[r];
    }
    if (Helmet) document.getElementById('Helmet').src = 'Images/Helmet_' + Helmet + '.png';

    //Consumables:
    let C = [...Consumables];
    for (let i = 1; i <= 2; i++) {
        let Consumable;
        let ConsumableNumber;
        if (Math.floor(Math.random() * 10) != 0) {
            r = Math.floor(Math.random() * C.length);
            Consumable = C[r];
            C.splice(r, 1);
        }
        if (Consumable) {
            if (Consumable.includes('Medkit')) ConsumableNumber = Math.floor(Math.random() * 1) + 1;
            if (Consumable.includes('Stim')) ConsumableNumber = Math.floor(Math.random() * 4) + 1;
            if (Consumable.includes('Grenade')) ConsumableNumber = Math.floor(Math.random() * 3) + 1;
            document.getElementById(`Item${itemNumber}`).src = 'Images/' + Consumable + '.png';
            document.getElementById(`Item${itemNumber}Number`).innerText = ConsumableNumber;
            itemNumber += 1;
        }
    }
}

function resetLoadout() {
    document.getElementById('Helmet').src = 'Images/None.png';
    document.getElementById('Shield').src = 'Images/None.png';
    document.getElementById('Backpack').src = 'Images/None.png';
    document.getElementById('Weapon1').src = 'Images/None.png';
    document.getElementById('Weapon2').src = 'Images/None.png';
    document.getElementById(`Item1`).src = 'Images/None.png';
    document.getElementById(`Item2`).src = 'Images/None.png';
    document.getElementById(`Item3`).src = 'Images/None.png';
    document.getElementById(`Item4`).src = 'Images/None.png';
    document.getElementById(`Item1Number`).innerText = '';
    document.getElementById(`Item2Number`).innerText = '';
    document.getElementById(`Item3Number`).innerText = '';
    document.getElementById(`Item4Number`).innerText = '';
}
