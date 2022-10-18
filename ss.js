
function parSSer() {
    document.getElementById("ssResult").innerHTML = "";
    ssInput = document.getElementById("ssText").value;  
    // ssInput = `University of Leeds Fleece Lined Jacket with heat seal University crest to left chest, SS logo printed in white to right chest, stacked club logo printed in white to right sleeve with Men's Cricket printed underneath in white, Leeds Gryphons printed to reverse in white, Gryphon logo printed above text in white and white rose printed below text. option of initials printed to left arm in white.`;
    // document.getElementById("ssText").value = "";
    // document.getElementById("ssText").value = "University of Leeds Fleece Lined Jacket with heat seal University crest to left chest, SS logo printed in white to right chest, stacked club logo printed in white to right sleeve with Men's Cricket printed underneath in white, Leeds Gryphons printed to reverse in white, Gryphon logo printed above text in white and white rose printed below text. option of initials printed to left arm in white.";
   
    for (var key in quirks) {
        console.log("key " + key + " has value " + quirks[key]);
        ssInput = ssInput.replace(key, quirks[key]);
      }
   
    sentz = ssInput.split(/,|\.|with |option|Option| and | - /);        
            for (let a = 0; a < sentz.length; a++) {
                words = sentz[a].split(" ");
                builder = [];
                for (let j = 0; j < words.length; j++) {
                    
                    var first = words[j].substring(0, 1);
                    var lower = words[j].toLowerCase();
                    var upper = words[j].toUpperCase();
                    var last = words[j].slice(-1);
                    

                    if ((first === "#")) {
                        builder.push(words[j]);                      
                    }


                    
                    // if ((words[j] === upper) && ( words[j] !== words[j].toLowerCase()) && !(keywords2.includes(upper)) && !(keywords.includes(lower))) {
                    //     builder.push(words[j]);
                    // }

                    // if ((first === first.toUpperCase()) && !(keywords2.includes(words[j])) && !(keywords.includes(lower)) && (lower.length>1)  && (first.match(/[a-z]/i))) {
                    //     builder.push(words[j]);                      
                    // }
                    
                    // && !(first.match(/\*/i))

                    if ((first === first.toUpperCase()) && !(keywords2.includes(words[j])) && !(keywords.includes(lower)) && (lower.length>1)  && !(last.match(/[0-9]/i)) ){
                        builder.push(words[j]);                      
                    }

 
                    if (keywords.includes(lower)) {

                        builder.push(lower);
                    }
                    
                    
                }
                breaktest = builder.length;                
                
                if (breaktest > 0) {
                    builder.forEach(addText);                    
                    addBreak();}
            }
        }

function addText(txt) {
    if (txt === "ss") {txt = "SS";}
    document.getElementById("ssResult").insertAdjacentHTML('beforeend', ` ` + txt + ` `);
}

function addBreak() {
    document.getElementById("ssResult").insertAdjacentHTML('beforeend', `<br>`);
}
