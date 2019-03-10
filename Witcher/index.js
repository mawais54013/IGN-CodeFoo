let helmets = [
    {
        name: 'Serpentine Cruz Headpiece ',
        price: 90,
        value: 23,
    },
    {
        name: 'Keeton Mask',
        price: 77,
        value: 24,
    },
    {
        name: 'Feline Visor',
        price: 68,
        value: 16,
    },
    {
        name: 'Ornate Helmet of Cagampan',
        price: 60,
        value: 16,
    },
    {
        name: 'Offner Protector',
        price: 54,
        value: 15,
    },
    {
        name: 'Leather Helmet',
        price: 49,
        value: 13,
    },
    {
        name: 'Glass Bowl',
        price: 44,
        value: 12,
    }
];

let leggings = [
    {
        name: 'Famed Pon Leggings',
        price: 87,
        value: 23,
    },
    {
        name: 'Ursine Trousers',
        price: 78,
        value: 12,
    },
    {
        name: 'Wolven Shinguards',
        price: 75,
        value: 15,
    },
    {
        name: 'Hansen Breeches',
        price: 69,
        value: 17,
    },
    {
        name: 'Griffin Pants',
        price: 62,
        value: 11,
    },
    {
        name: 'Tanned Leg Protection',
        price: 59,
        value: 15,
    },
    {
        name: 'Manticore Braces',
        price: 56,
        value: 12,
    },
    {
        name: 'Mail Emares Leggings',
        price: 53,
        value: 14,
    },
    {
        name: 'Woven Leggings',
        price: 47,
        value: 11,
    },
    {
        name: 'Silken Pants',
        price: 45,
        value: 10,
    },
    {
        name: 'Tattered Shorts',
        price: 42,
        value: 13,
    },
];

let chests = [
    {
        name: 'Armor de Jandro',
        price: 67,
        value: 22,
    },
    {
        name: 'Chestpiece of Vachon',
        price: 64,
        value: 23,
    },
    {
        name: 'Kaer Morhen Armor',
        price: 62,
        value: 21,
    },
    {
        name: 'Cured Leather Chestpiece',
        price: 59,
        value: 20,
    },
    {
        name: 'Smiths Plated Chestguard',
        price: 58,
        value: 10,
    },
    {
        name: 'Dented Plate Armor',
        price: 57,
        value: 19,
    },
    {
        name: 'Jeweled Drake Tunic',
        price: 55,
        value: 19,
    },
    {
        name: 'Gingers Glided Armor',
        price: 54,
        value: 18,
    },
    {
        name: 'Garcia Guard',
        price: 50,
        value: 17,
    },
]

let coins = 300;
let max = 0;
let setArmor = [];

function findArmor(money, highNum)
{
    let helmet = '';
    let legging = '';
    let chest = '';
    let extra = '';

    let hNum = 0;
    let hPrice = 0;
    let lNum = 0;
    let lPrice = 0;
    let cNum = 0;
    let cPrice = 0;

    let total = 0;

    for(let i = 0; i < helmets.length; i++)
    {
        if(hNum < helmets[i].value && helmets[i].price < money)
        {
            hNum = helmets[i].value;
            hPrice = helmets[i].price;
            helmet = helmets[i].name;
        }
    }
    money = money - hPrice;

    for(let j = 0; j < leggings.length; j++)
    {
        if(lNum < leggings[j].value && leggings[j].price < money)
        {
            lNum = leggings[j].value;
            lPrice = leggings[j].price;
            legging = leggings[j].name;
        }
    }
    money = money - lPrice;

    for(let k = 0; k < chests.length; k++)
    {
        if(cNum < chests[k].value && chests[k].price < money)
        {
            cNum = chests[k].value;
            cPrice = chests[k].price;
            chest = chests[k].name;
        }
    }
    money = money - cPrice;

    let lastMaxValue = 0;

    let lastHelmet = finalArmor(money,helmets,helmet);
    let lastLeg = finalArmor(money,leggings,legging);
    let lastChest = finalArmor(money,chests,chest);

    if(lastMaxValue < lastHelmet[1])
    {
        lastMaxValue = lastHelmet[1];
        extra = lastHelmet[0];
    }
    if(lastMaxValue < lastChest[1])
    {
        lastMaxValue = lastChest[1];
        extra = lastChest[0];
    }
    if(lastMaxValue < lastLeg[1])
    {
        lastMaxValue = lastLeg[1];
        extra = lastLeg[0];
    }
    
    total = hNum + lNum + cNum + lastMaxValue;
    console.log('Helmet: ' + helmet);
    console.log('Chest: ' + chest);
    console.log('Legging: ' + legging);
    console.log('Extra Piece: ' + extra);
    console.log('Max Value: ' + total);
}

findArmor(coins,max);

function finalArmor(crown,typeArm,areaArm)
{
    let arr = [];
    let max = 0;
    let itemName = '';
    let itemPrice = 0;

    for(let r = 0 ; r < typeArm.length; r++)
    {
        if(max < typeArm[r].value && typeArm[r].price <= crown && typeArm[r].name !== areaArm)
        {
            max = typeArm[r].value;
            itemName = typeArm[r].name;
            itemPrice = typeArm[r].price;
        }
    }
    crown = crown - itemPrice;

    arr.push(itemName);
    arr.push(max);
    arr.push(crown);

    return arr;
}