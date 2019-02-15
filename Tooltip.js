class Definition{
    constructor(term, meaning){
        this.term_ = term;
        this.meaning_ = meaning;
    }
};

//Pseudo-database of definitions
var definitionArr = [];
definitionArr.push(new Definition('tooltip', 'A tooltip offers additional information on a subject matter.'));
//definitionArr.push 

//Purpose: function to display definition for each term
function show(element, term){
    let definition = definitionArr.find(definition => definition.term_ == term);

    //alert version
   /*  
    if(typeof(definition) == 'object'){
        alert(definition.meaning_);
    }
    else{
        alert(typeof(definition));
    } */


    let p = document.createElement('p');
    p.id = term + "_meaning";
    p.className = "meaning";
    let text = document.createTextNode(definition.meaning_);
    p.append(text);
    element.parentElement.append(p);

}

function hide(element, term){
    document.getElementById(term + "_meaning").outerHTML = "";
}