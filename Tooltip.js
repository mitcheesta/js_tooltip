//Storing terms and their meanings in Definition class
class Definition{
    constructor(term, meaning){
        this.term_ = term;
        this.meaning_ = meaning;
    }
};

//Array of Definition objects functioning as pseudo-database of definitions
var definitionArr = [];
definitionArr.push(new Definition('tooltip', 'A tooltip offers additional information on a subject matter.'));
definitionArr.push(new Definition('lorem ipsum', 'A placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.'));

//Purpose: Finds definition for term and adds it to an element that is displayed under the term in the HTML.
// @element - the element that called this function (passed in as 'this')
// @term - the term passed in as a string
function show(element, term){
    let definition = definitionArr.find(definition => definition.term_ == term);

    //Creates <p> with id and class
    let e = document.createElement('span');
    e.id = term + "_meaning";
    e.className = "tt-meaning";

    //Adds term meanins as inner
    let text = document.createTextNode(definition.meaning_);
    e.append(text);
    element.append(e);

    /*
    //Adds term meaning as text to <p> then adds that to parent of calling element
    let text = document.createTextNode(definition.meaning_);
    e.append(text);
    element.parentElement.append(e);
    */
}

//Purpose: to hide the tooltip text. Called when mouse stops hovering over element.
function hide(term){
    //Delays hiding by .15 of a second.
    window.setTimeout(function(){ 
        document.getElementById(term + "_meaning").outerHTML = "";
    }, 150);
}

//Purpose: When term is clicked, this function calls the function to hide or the function to show the definition based on the definition's current state.
function toggle(element, term){
    //Check if element has an inner element (i.e. span has span)
    if(element.hasChildNodes && element.firstChild.nodeType == Node.ELEMENT_NODE){ //if true, hide the meaning
        hide(term);
    }
    else{
        show(element, term); //if false, display the meaning
    }
}