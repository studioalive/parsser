
function parSSer() {
    document.getElementById("ssResult").innerHTML = "";
    // ssInput = document.getElementById("ssText").value;  
    ssInput = `Halliford School PE Shirt with school logo printed to left chest (TRANS-HALLIFORDWH), ss logo printed right chest (PRINT-SS-HALLIFORD), House name to reverse (PRINT-HALLIFORD) optional initials printed to right sleeve in white for £1.50 (40mm) and optional name tag printed inside the garment for £2.50`
    sentences = ssInput.split(",");
    for (let i = 0; i < sentences.length; i++) {
        words = sentences[i].split(" ");
        // const sOut = "Sentence #" + i;
        // addText(sOut);
        for (let j = 0; j < words.length; j++) {
            wordCheck(words[j], j);
            // const wOut = "Word #" + j + ": " + words[j];
            // addText(wOut);        
        }
    }

}

function addText(txt) {
    document.getElementById("ssResult").insertAdjacentHTML('beforeend', ` ` + txt + ` `);
}

function addBreak() {
    document.getElementById("ssResult").insertAdjacentHTML('beforeend', `<br>`);
}

function wordCheck(word, pos) {
    var firstthree = word.substring(0, 3).toLowerCase();
    console.log(firstthree);
    switch (firstthree) {
        case "cus":
            custom(pos);
            break;
        case "ini":
            initials(pos);
            break;
        case "ss":
            ss(pos);
            break;
        case "bad":
            badge(pos);
            break;
        case "cre":
            badge(pos);
            break;
        case "log":
            badge(pos);
            break;
        case "tri":
            trim(pos);
            break;
        case "nam":
            namefunc(pos);
            break;
    }
}

function wordScan(word, pos) {
    builder = [word];
    addBreak();
    for (let x = pos - 3; x < pos + 5; x++) {
        if (typeof words[x] !== 'undefined') {
            var firstthree = words[x].substring(0, 3).toLowerCase();
            if (keywords.includes(firstthree)) {
                builder.push(firstthree);
            }
           
        }
    }
    addText(builder.toString());
}



function custom(pos) {

}

function badge(pos) {
    wordScan("badge", pos);
}

function initials(pos) {
    wordScan("initials", pos);
}

function ss(pos) {
    wordScan("ss", pos);
}

function namefunc(pos) {
    wordScan("name", pos);
}

function trim(pos) {
    wordScan("trim", pos);
}