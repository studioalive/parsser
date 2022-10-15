
function parSSer() {
    var ssInput = document.getElementById("ssText").value;   
    const sentences = ssInput.split("."); 
    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(" ");
        const sOut = "Sentence #" + i;
        addText(sOut);
        for (let j = 0; j < words.length; j++) {
        const wOut = "Word #" + j + ": " + words[j];
        addText(wOut);        
        }
      }
    
  }

function addText(txt) {
    document.getElementById("ssResult").insertAdjacentHTML('beforeend',`<p>`+txt+`</p>`);
}