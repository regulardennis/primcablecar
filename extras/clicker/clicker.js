let num = Number(localStorage.clicks) || 0;

let upgrades = [
    {
        name: "test",
        price: 10,
        benefit: "+1 per click",
        once: false,
    },
];

let purchased = JSON.parse(localStorage.purchased || "[]") || [];

const shop = document.getElementById("shop");
const points = document.getElementById("points");

points.innerHTML = `prim points: ${num}`;

function getCount(name) {
    const entry = purchased.find(p => p.split(":")[0] === name);
    return entry ? Number(entry.split(":")[1]) : 0;
}

function setCount(name, count) {
    const index = purchased.findIndex(p => p.split(":")[0] === name);
    const entry = `${name}:${count}`;

    if (index === -1) {
        purchased.push(entry);
    } else {
        purchased[index] = entry;
    }
}

function updateShop() {
    let html = '';

    for (let i = 0; i < upgrades.length; i++) {
        let upgrade = upgrades[i];
        let count = getCount(upgrade.name);

        if (upgrade.once && count > 0) {
            continue;
        }

        html = `${html}\n`;
        html = `${html}<p>${upgrade.name}: ${upgrade.benefit} - ${count} copies</p>`;
        html = `${html}<button data-index="${i}">${upgrade.price} prim points</button>`;
    }

    shop.innerHTML = html;

    shop.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => onUpgradeClick(Number(btn.dataset.index)));
    });

    localStorage.purchased = JSON.stringify(purchased);
}

updateShop();

function onUpgradeClick(index) {
    const upgrade = upgrades[index];

    if (!upgrade) {
        return;
    }

    if (upgrade.once && getCount(upgrade.name) > 0) {
        return;
    }

    if (num < upgrade.price) {
        return;
    }

    num -= upgrade.price;

    setCount(upgrade.name, getCount(upgrade.name) + 1);

    localStorage.clicks = num;
    points.innerHTML = `prim points: ${num}`;
    
    updateShop();
}

function onClick() {
    let increment = 1;

    for (let i = 0; i < purchased.length; i++) {
        const [name, countStr] = purchased[i].split(":");
        const count = Number(countStr);

        switch (name) {
            case "test":
                increment += 1 * count;

                break;

            default:
                break;
        }
    }

    num += increment;

    points.innerHTML = `prim points: ${num}`;
    localStorage.clicks = num;

    updateShop();
}

function onReset() {
    num = 0;
    purchased = [];

    points.innerHTML = `prim points: ${num}`;

    localStorage.clicks = num;
    localStorage.purchased = JSON.stringify(purchased);

    updateShop();
}