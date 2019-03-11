//Storing terms and their meanings in Definition class
class Definition{
    constructor(term, meaning){
        this.term_ = term;
        this.meaning_ = meaning;
    }
};

//Purpose: Finds definition for term and adds it to an element that is displayed under the term in the HTML.
// @element - the element that called this function (passed in as 'this')
// @term - the term passed in as a string
function show(element, term, definition){
    //Creates <span> with id and class
    let e = document.createElement('span');
    e.id = term + "_meaning";
    e.className = "tt-meaning";

    //Adds term meanings as inner text
    let text = document.createTextNode(definition);
    e.append(text);
    element.append(e);

    //Create arrow pointing to term
    let arrow = document.createElement('span');
    arrow.id = term + '_arrow';
    arrow.className = 'tt-arrow';
    e.append(arrow);

    //Change CSS if term is too close to left screen border
    if(element.offsetLeft <= 75){
        // e.style.border = '1px solid red';
        e.style.marginLeft = '-50px';

        let arrow  = e.firstElementChild;
        arrow.style.left = '25%';
    }
    //Change CSS if term is too close to right screen border
    else if(window.innerWidth > 400 && window.innerWidth - element.offsetLeft <= 225){
        // e.style.border = '1px solid blue'; 
        e.style.marginLeft = '0';
        e.style.right = '0';
        e.style.left = '-210%';

        let arrow  = e.firstElementChild;
        arrow.style.left = '75%';
    }
}

//Purpose: to hide the tooltip text. Called when mouse stops hovering over element.
function hide(term){
    //Delays hiding by .15 of a second.
    window.setTimeout(function(){ 
        document.getElementById(term + "_meaning").outerHTML = "";
    }, 150);
}