const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');
const itemList = document.querySelector('#item-list');
const addItemButton = document.querySelector("#new-item");
let formList = document.querySelector('#form-list');
const calculateButton = document.querySelector('#calculate');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
})


class item {
    constructor(name, description, image, recepie) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.recepie = recepie;
        this.ammount = 0;
    }
    calculateItems() {
        let dictionary = [];
        for (let key in this.recepie) {
            dictionary[key] = this.recepie[key] * this.ammount;
        };
        return dictionary;
    }
}
let redstoneTorch = new item(
        "Redstone Torch",
        "",
        "",
        {
            "Redstone Dust": 1,
            "Stick":1
        })
let redstoneDust = new item(
        "Redstone dust",
        "Redstone dust is probably the most important item and more than likely the tool you will use most. When powered, the dust will glow brightly and power any connected solid blocks.",
        "images/redstone-dust.png"
    );

let repeater = new item(
        "Redstone Repeater",
        'The repeater is as simple as it sounds, it "repeats" the signal causing it to reach over further distances. Note: while most commonly used to extende signals, it also delays the signal by 1-4 ticks depending on what setting it is set to.',
        "images/repeater.png",
        {
            "Stone" : 3,
            "Redstone Dust": 3,
            "Stick":2,
        }
    );

let comparator = new item(
        "Redstone Comparitor",
        "The comparitor is the most complex item we have on this list. In short, it compares a signal from the back and from the side. When the front torch is off, if the side signal is stronger then the back, the output turns off. When the front torch is on, the comparitor enters subtract mode and the output is the back signal subtract the side signal. Note: the comparitor can also measure the ammount of Items in a container (like a chest).",
        "images/comparator.png",
        {
            "Stone" : 3,
            "Redstone Dust": 3,
            "Stick":3,
            "Quartz":1
        }
    );

let piston = new item(
        "Pistons",
        "Pistons are really simple, when powered, they extend out pushing up to twelve blocks in one block away. When the piston gets un powered, it retracks, pulling the head of the piston back in.",
        "images/piston-side.png",
        {
            "Cobblestone" : 4,
            "Redstone Dust": 1,
            "Wooden Planks": 3,
            "Iron Ingot": 1
        }
    );
let stickyPiston = new item(
        "",
        "A sticky piston functions basically the same as a normal piston, except that when It retracts, it pulls back the block next to the sticky side of the piston head.",
        "images/piston-top-sticky.png",
        {
            "Cobblestone" : 4,
            "Redstone Dust": 1,
            "Wooden Planks": 3,
            "Iron Ingot": 1,
            "Slime Ball": 1
        }
    );

let solidBlock = new item(
        "Blocks",
        "Blocks are verry important too. In short there are two types of blocks, solid blocks and not solid blocks. A solid block will get powered by redstone and will power nearby blocks when by active redstone.",
        "images/stone-slab-top.png"
    );

let notSolidBlock = new item(
        "",
        "A not solid block, such as glass or half slabs, will not power nearby blocks when next to active redstone.",
        "images/glass.png"
    );
let items = [redstoneDust,repeater,comparator,piston,stickyPiston,solidBlock,notSolidBlock];
let newItemList = "";
items.forEach(item =>{
    newItemList += `
        <h2>${item.name}</h2>
        <section>
            <p>${item.description}</p>
            <img class="item-image" src="${item.image}" alt="picture of ${item.name}" loading="lazy">
        </section>`
});
if (document.querySelector('#item-list')){
    itemList.innerHTML = newItemList;
}
let itemNumber = 0;

function AddNewItemToList(){
    const itemInput = document.createElement("fieldset");
    itemInput.innerHTML = `
                        <select name="item-selection" id="item-selection${itemNumber}" required>
                            <option value="" disabled selected>Select an Item...</option>
                            <option value="redstone-torch">Redstone Torch</option>
                            <option value="redstone-repeater">Redstone repeater</option>
                            <option value="redstone-comparitor">Redstone comparitor</option>
                            <option value="piston">Piston</option>
                            <option value="sticky-piston">Sticky piston</option>
                        </select>
                        <input type="number" id="item-count${itemNumber}" min="1" max="64">`;
    formList.appendChild(itemInput);
    const deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.id = `button${itemNumber}`;
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", function () {
        formList.removeChild(itemInput);
    });
    itemInput.insertAdjacentElement("afterbegin",deleteBtn);
    itemNumber += 1;
};
if (document.querySelector('#form-list')){
    AddNewItemToList();
    document.querySelector("#button0").insertAdjacentElement("beforebegin",document.createElement('div'));
    document.querySelector("#button0").remove();

    addItemButton.addEventListener("click", function (){
    AddNewItemToList();
});



calculateButton.addEventListener("click", function (){
    localStorage.clear();
    formList = document.querySelector('#form-list');
    let recipt = [];
    for (let i = 0; i < formList.children.length; i++) {
        let itemQuantity = parseInt(document.querySelector(`#item-count${i}`).value);
        let currentItem = document.querySelector(`#item-selection${i}`);

        if (currentItem.value  === "redstone-torch"){
            redstoneTorch.ammount = itemQuantity;
            recipt.push(redstoneTorch.calculateItems());
        }
        else if (currentItem.value  === "redstone-repeater"){
            repeater.ammount = itemQuantity;
            recipt.push(repeater.calculateItems());
        }
        else if (currentItem.value  === "redstone-comparitor"){
            comparator.ammount = itemQuantity;
            recipt.push(comparator.calculateItems());
        }
        else if (currentItem.value  === "piston"){
            piston.ammount = itemQuantity;
            piston.calculateItems();
            recipt.push(piston.calculateItems());
        }
        else if (currentItem.value  === "sticky-piston"){
            stickyPiston.ammount = itemQuantity;
            recipt.push(stickyPiston.calculateItems());
        }
    };
    let listOfKeys = [];
    recipt.forEach((itemRecepie) => {
       for (let key in itemRecepie) {
        
            if (localStorage.getItem(key) === null){
                localStorage.setItem(key, itemRecepie[key]);
                listOfKeys.push(key);
            }
            else {
                let num = parseInt(localStorage.getItem(key));
                num = num + parseInt(itemRecepie[key]);
                localStorage.setItem(key, num);
            };
        };
    });
    localStorage.setItem("keyList" , JSON.stringify(listOfKeys));
    window.location.href = "result.html";
});
};
if (document.querySelector('#crafting-list')){
    let keyList = JSON.parse(localStorage.getItem("keyList"))
    let craftingList = document.querySelector("#crafting-list");
    keyList.forEach((key) =>{
        const displayText = document.createElement("h2");
        displayText.textContent = `${key}: ${localStorage[key]}`;
        craftingList.appendChild(displayText);
            
        displayText.addEventListener('click', () => {
            displayText.classList.toggle('crossed');
        });



    });
};