// helmets array
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
// legging array
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
// chest array
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
];
// boots array
let boots = [
    {
        name: 'Diamond Boots',
        price: 64,
        value: 18, 
    },
    {
        name: 'Steel Boots',
        price: 52,
        value: 14, 
    },
    {
        name: 'Tates Spiked Cleats',
        price: 52,
        value: 20, 
    },
    {
        name: 'Leather Lunde Shoes',
        price: 35,
        value: 7, 
    },
    {
        name: 'SCloth Shoes',
        price: 33,
        value: 5, 
    },
]
// let coins = 300;
let coins = document.getElementById('input1').value;
let setArmor = [];
// once user clicks button this function is performed
function findArmor(money)
{
    let helmet = '';
    let legging = '';
    let chest = '';
    let boot = '';
    let extra = '';

    let hNum = 0;
    let hPrice = 0;
    let lNum = 0;
    let lPrice = 0;
    let cNum = 0;
    let cPrice = 0;
    let bNum = 0;
    let bPrice = 0;

    let total = 0;
// go through the helmet array to find one with max value and fits within money limit
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
// after money is subtracted from helmet, do the same with leggings array
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
// same code to find max of chest
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
// same code to find max of boots

for(let l = 0; l < boots.length; l++)
{
    if(bNum < boots[l].value && boots[l].price < money)
    {
        bNum = boots[l].value;
        bPrice = boots[l].price;
        boot = boots[l].name;
    }
}
// if money is less than the lowest price to get one extra item then perform this function
    if(money - bPrice < 33)
    {
        let finalSet = getLastItems(money,boots,boot);
        bNum = finalSet[2];
        boot = finalSet[0];
        money = finalSet[3];
    }
    // else just subtract money
    else 
    {
        money = money - bPrice; 
    }
// to find the extra item we perform finalArmor function and check with each other to find max value and if it is within money limit
    let lastMaxValue = 0;
    let remainder = 0;

    let lastHelmet = finalArmor(money,helmets,helmet);
    let lastLeg = finalArmor(money,leggings,legging);
    let lastChest = finalArmor(money,chests,chest);
    let lastBoot = finalArmor(money,boots,boot);

    if(lastMaxValue < lastHelmet[1])
    {
        lastMaxValue = lastHelmet[1];
        extra = lastHelmet[0];
        remainder = lastHelmet[2];
    }
    if(lastMaxValue < lastChest[1])
    {
        lastMaxValue = lastChest[1];
        extra = lastChest[0];
        remainder = lastChest[2];
    }
    if(lastMaxValue < lastLeg[1])
    {
        lastMaxValue = lastLeg[1];
        extra = lastLeg[0];
        remainder = lastLeg[2];
    }
    if(lastMaxValue < lastBoot[1])
    {
        lastMaxValue = lastBoot[1];
        extra = lastBoot[0];
        remainder = lastBoot[2];
    }
    
    total = hNum + lNum + cNum + bNum + lastMaxValue;
// after we have all the armor, go ahead and append them to the html in the following format
    $('#displayArmor').append(`
        <h1>Summary</h1>
        <h2 class="uk-card-title">Helmet: `+` ${helmet}</h2>
        <h2 class="uk-card-title">Chest: `+` ${chest}</h2>
        <h2 class="uk-card-title">Legging: `+` ${legging}</h2>
        <h2 class="uk-card-title">Boots: `+` ${boot}</h2>
        <h2 class="uk-card-title">Extra item: `+` ${extra}</h2>
        <h2 class="uk-card-title">Max Value: `+` ${total}</h2>
        <h2 class="uk-card-title">Remaining Crowns: `+` ${remainder}</h2>
    `)
    
}
// function to get extra piece with the money available
function finalArmor(crown,typeArm,areaArm)
{
    let arr = [];
    let max = 0;
    let itemName = '';
    let itemPrice = 0;
// as long as value is high, price is acceptable, and it is not the same item return it 
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
// function to get max out of boots and return the min crowns to get final extra item
function getLastItems(cash, b1, b2)
{
    let arr1 = [];
    let name1 = '';
    let price1 = 0;
    let maxVal1 = 0;
    let finalPrice = 0;

    for(let t = 0; t < b1.length; t++)
    {
        if(cash - b1[t].price > 33 && b1[t].value > maxVal1) 
        {
            name1 = b1[t].name;
            price1 = b1[t].price;
            maxVal1 = b1[t].value;
        }
    }
    finalPrice = cash - price1;
    arr1.push(name1);
    arr1.push(price1);
    arr1.push(maxVal1);
    arr1.push(finalPrice);

    return arr1;
}