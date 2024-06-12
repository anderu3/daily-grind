
function coffeeTemplate(coffee){
    return `
    <p>
    <img 
        src="${coffee.pic}" 
        alt="${coffee.alt}" 
        id="coffee"/>
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is 
    <strong class="feature">${coffee.name}</strong>, 
    ${coffee.desc}!</p>
    `;
}


let myDate = new Date();
let myDay = myDate.getDay();
let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of bubble tea",
    color: "pink",
    day: "Tuesday",
    desc: "I like bubble tea",
}

switch(myDay){
    case 0:
        today = "Sunday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of cold brew",
            color: "yellow",
            day: "Sunday",
            desc: "I like cold brew",
        }
        break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of mocha",
            color: "brown",
            day: "Monday",
            desc: "I like mocha",
        }
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            color: "pink",
            day: "Tuesday",
            desc: "I like bubble tea",
        }
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "a picture of cup of frappaccino",
            color: "light blue",
            day: "Wednesday",
            desc: "Frappa mappa",
        }
        break;
};

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;



