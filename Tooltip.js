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

//Purpose: Finds definition for term and adds it to an element that is displayed under the term in the HTML.
// @element - the element that called this function (passed in as 'this')
// @term - the term passed in as a string
function show(element, term){
    let definition = definitionArr.find(definition => definition.term_ == term);

    //Creates <p> with id and class
    let p = document.createElement('p');
    p.id = term + "_meaning";
    p.className = "tt-meaning";

    //Adds term meaning as text to <p> then adds that to parent of calling element
    let text = document.createTextNode(definition.meaning_);
    p.append(text);
    element.parentElement.append(p);
}

//Purpose: 
function hide(term){
    document.getElementById(term + "_meaning").outerHTML = "";
}