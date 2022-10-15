
function parSSer() {
    document.getElementById("ssResult").innerHTML = "";
    ssInput = document.getElementById("ssText").value;  
    // ssInput = `Halliford School PE Shirt with school logo printed to left chest (TRANS-HALLIFORDWH), ss logo printed right chest (PRINT-SS-HALLIFORD), House name to reverse (PRINT-HALLIFORD) optional initials printed to right sleeve in white for £1.50 (40mm) and optional name tag printed inside the garment for £2.50`
    // document.getElementById("ssText").value = "";
    sentz = ssInput.split(/,|\)|with|and/);        
            for (let a = 0; a < sentz.length; a++) {
                words = sentz[a].split(" ");
                builder = [];
                for (let j = 0; j < words.length; j++) {
                    
                    if (words[j].substring(0, 1) === "(") {
                        var bracket = words[j].slice(1,words[j].length);
                        builder.push(bracket);
                        break;
                    }

                    upper = words[j].toUpperCase();
                    
                    if ((words[j] === upper) && ( words[j] !== words[j].toLowerCase()) && !(keywords2.includes(upper))) {
                        builder.push(words[j]);
                    }

                    var lower = words[j].toLowerCase();
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
