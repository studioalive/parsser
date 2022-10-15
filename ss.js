
function parSSer() {
    document.getElementById("ssResult").innerHTML = "";
    // ssInput = document.getElementById("ssText").value;  
    ssInput = `Halliford School PE Shirt with school logo printed to left chest (TRANS-HALLIFORDWH), ss logo printed right chest (PRINT-SS-HALLIFORD), House name to reverse (PRINT-HALLIFORD) optional initials printed to right sleeve in white for £1.50 (40mm) and optional name tag printed inside the garment for £2.50`
    sentences = ssInput.split(",");
    for (let i = 0; i < sentences.length; i++) {
        sents = sentences[i].split("and");
        for (let b = 0; b < sents.length; b++) {
            sentz = sents[b].split(")");
            for (let a = 0; a < sentz.length; a++) {
                words = sentz[a].split(" ");
                builder = [];
                for (let j = 0; j < words.length; j++) {
                    
                    var firstthree = words[j].substring(0, 3).toLowerCase();
                    if (keywords.includes(firstthree)) {
                        builder.push(firstthree);
                    }
                    
                    
                }
                breaktest = builder.length;                
                console.log(breaktest);
                if (breaktest > 0) {
                    addText(builder.toString());
                    addBreak();}
            }
        }
    }
}
function addText(txt) {
    document.getElementById("ssResult").insertAdjacentHTML('beforeend', ` ` + txt + ` `);
}

function addBreak() {
    document.getElementById("ssResult").insertAdjacentHTML('beforeend', `<br>`);
}
