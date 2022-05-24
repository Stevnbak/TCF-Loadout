//Weapons
let LightWeapons = ['ASP', 'Scrapper', 'PDW', 'Voltaic Brute', 'K-28', 'Scarab'];
let MediumWeapons = ['Advocate', 'Gorgon', 'KOR-47', 'Manticore', 'AR55', 'Phasic Lancer', 'Guarantee', 'Zeus'];
let HeavyWeapons = ['Lacerator', 'KBR Longshot', 'Basilisk', 'Bolt Action', 'Kinetic Arbiter', 'KARMA'];
let ShotgunWeapons = ['Maelstrom', 'Shattergun', 'Trench Gun'];
let SpecialWeapons = ['KOMRAD'];

//Other Arrays
let Consumables = ['GrenadeFrag', 'GrenadeGas', 'GrenadeSmoke', 'GrenadeSound', 'MedkitCombat', 'MedkitStrong', 'MedkitWeak', 'StimCombat', 'StimStrong', 'StimWeak'];
let Backpacks = ['Common', 'Uncommon', 'Rare', 'Epic'];
let Shields = ['Common', 'Common_Tactical', 'Common_Restoration', 'Uncommon', 'Uncommon_Tactical', 'Uncommon_Restoration', 'Rare', 'Rare_Tactical', 'Rare_Restoration', 'Epic', 'Exotic'];
let Helmets = ['Common', 'Common_Tactical', 'Common_Restoration', 'Uncommon', 'Uncommon_Tactical', 'Uncommon_Restoration', 'Rare', 'Rare_Tactical', 'Rare_Restoration', 'Epic', 'Exotic', 'NightVision'];

function Generate() {
    let Weapon1;
    let Weapon2;
    let Consumable1;
    let Consumable2;
    let Backpack;
    let Shield;
    let Helmet;
    let Ammo1;
    let Ammo2;
    let Consumable1Number;
    let Consumable2Number;
    let Ammo1Number;
    let Ammo2Number;

    let r;
    let LW = [...LightWeapons];
    let MW = [...MediumWeapons];
    let HW = [...HeavyWeapons];
    let ShotW = [...ShotgunWeapons];
    let SpecialW = [...SpecialWeapons];
    let C = [...Consumables];
    let B = [...Backpacks];
    let S = [...Shields];
    let H = [...Helmets];

    //Weapons
    r = Math.floor(Math.random() * (LW.length + MW.length + HW.length + ShotW.length + SpecialW.length));
    if (r < LW.length) {
        Weapon1 = LW[Math.floor(Math.random() * LW.length)];
        delete LW[LW.indexOf(Weapon1)];
        Ammo1 = 'Light';
    } else if (r < LW.length + MW.length) {
        Weapon1 = MW[Math.floor(Math.random() * MW.length)];
        delete MW[MW.indexOf(Weapon1)];
        Ammo1 = 'Medium';
    } else if (r < LW.length + MW.length + HW.length) {
        Weapon1 = HW[Math.floor(Math.random() * HW.length)];
        delete HW[HW.indexOf(Weapon1)];
        Ammo1 = 'Heavy';
    } else if (r < LW.length + MW.length + HW.length + ShotW.length) {
        Weapon1 = ShotW[Math.floor(Math.random() * ShotW.length)];
        delete ShotW[ShotW.indexOf(Weapon1)];
        Ammo1 = 'Shotgun';
    } else if (r < LW.length + MW.length + HW.length + ShotW.length + SpecialW.length) {
        Weapon1 = SpecialW[Math.floor(Math.random() * SpecialW.length)];
        delete SpecialW[SpecialW.indexOf(Weapon1)];
        Ammo1 = 'Special';
    }
    r = Math.floor(Math.random() * (LW.length + MW.length + HW.length + ShotW.length + SpecialW.length));
    if (r < LW.length) {
        Weapon2 = LW[Math.floor(Math.random() * LW.length)];
        Ammo2 = 'Light';
    } else if (r < LW.length + MW.length) {
        Weapon2 = MW[Math.floor(Math.random() * MW.length)];
        Ammo2 = 'Medium';
    } else if (r < LW.length + MW.length + HW.length) {
        Weapon2 = HW[Math.floor(Math.random() * HW.length)];
        Ammo2 = 'Heavy';
    } else if (r < LW.length + MW.length + HW.length + ShotW.length) {
        Weapon2 = ShotW[Math.floor(Math.random() * ShotW.length)];
        Ammo2 = 'Shotgun';
    } else if (r < LW.length + MW.length + HW.length + ShotW.length + SpecialW.length) {
        Weapon2 = SpecialW[Math.floor(Math.random() * SpecialW.length)];
        Ammo2 = 'Special';
    }

    //Backpack
    r = Math.floor(Math.random() * B.length);
    Backpack = B[r];

    //Consumables:
    if (Math.floor(Math.random() * 10) != 0) {
        r = Math.floor(Math.random() * C.length);
        Consumable1 = C[r];
        C.splice(r, 1);
    }
    if (Math.floor(Math.random() * 10) != 0) {
        r = Math.floor(Math.random() * C.length);
        Consumable2 = C[r];
    }

    //Shield
    if (Math.floor(Math.random() * 7) != 0) {
        r = Math.floor(Math.random() * S.length);
        Shield = S[r];
    }

    //Helmet
    if (Math.floor(Math.random() * 5) != 0) {
        r = Math.floor(Math.random() * H.length);
        Helmet = H[r];
    }

    //Numbers
    if (Consumable1) {
        if (Consumable1.includes('Medkit')) Consumable1Number = Math.floor(Math.random() * 1) + 1;
        if (Consumable1.includes('Stim')) Consumable1Number = Math.floor(Math.random() * 4) + 1;
        if (Consumable1.includes('Grenade')) Consumable1Number = Math.floor(Math.random() * 3) + 1;
    }
    if (Consumable2) {
        if (Consumable2.includes('Medkit')) Consumable2Number = Math.floor(Math.random() * 1) + 1;
        if (Consumable2.includes('Stim')) Consumable2Number = Math.floor(Math.random() * 4) + 1;
        if (Consumable2.includes('Grenade')) Consumable2Number = Math.floor(Math.random() * 3) + 1;
    }
    if (Ammo1) {
        if (Ammo1 == 'Light' || Ammo1 == 'Medium') Ammo1Number = Math.floor(Math.random() * 249) + 1;
        if (Ammo1 == 'Shotgun' || Ammo1 == 'Heavy' || Ammo1 == 'Special') Ammo1Number = Math.floor(Math.random() * 49) + 1;
    }
    if (Ammo2) {
        if (Ammo2 == 'Light' || Ammo2 == 'Medium') Ammo2Number = Math.floor(Math.random() * 250);
        if (Ammo2 == 'Shotgun' || Ammo2 == 'Heavy' || Ammo2 == 'Special') Ammo2Number = Math.floor(Math.random() * 49) + 1;
    }

    //Set pictures on html page:
    document.getElementById('Weapon1').src = 'Images/Weapons/' + Weapon1 + '.png';
    if (Weapon2) document.getElementById('Weapon2').src = 'Images/Weapons/' + Weapon2 + '.png';
    else document.getElementById('Weapon2').src = 'Images/None.png';
    if (Backpack) document.getElementById('Backpack').src = 'Images/Backpack_' + Backpack + '.png';
    else document.getElementById('Backpack').src = 'Images/None.png';
    if (Shield) document.getElementById('Shield').src = 'Images/Shield_' + Shield + '.png';
    else document.getElementById('Shield').src = 'Images/None.png';
    if (Helmet) document.getElementById('Helmet').src = 'Images/Helmet_' + Helmet + '.png';
    else document.getElementById('Helmet').src = 'Images/None.png';

    //Items:
    document.getElementById(`Item1`).src = 'Images/None.png';
    document.getElementById(`Item2`).src = 'Images/None.png';
    document.getElementById(`Item3`).src = 'Images/None.png';
    document.getElementById(`Item4`).src = 'Images/None.png';
    document.getElementById(`Item1Number`).innerText = '';
    document.getElementById(`Item2Number`).innerText = '';
    document.getElementById(`Item3Number`).innerText = '';
    document.getElementById(`Item4Number`).innerText = '';
    let n = 1;
    if (Consumable1) {
        document.getElementById(`Item${n}`).src = 'Images/' + Consumable1 + '.png';
        document.getElementById(`Item${n}Number`).innerText = Consumable1Number;
        n += 1;
    }
    if (Consumable2) {
        document.getElementById(`Item${n}`).src = 'Images/' + Consumable2 + '.png';
        document.getElementById(`Item${n}Number`).innerText = Consumable2Number;
        n += 1;
    }
    document.getElementById(`Item${n}`).src = 'Images/Ammo_' + Ammo1 + '.png';
    document.getElementById(`Item${n}Number`).innerText = Ammo1Number;
    n += 1;
    if (Ammo2) {
        document.getElementById(`Item${n}`).src = 'Images/Ammo_' + Ammo2 + '.png';
        document.getElementById(`Item${n}Number`).innerText = Ammo2Number;
        n += 1;
    }
}
