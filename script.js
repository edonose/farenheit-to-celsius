document.getElementById("btn1").addEventListener("click", convert1);

function convert1() {
  let inF = parseFloat(document.getElementById("inF").value);
  let outC = ((inF - 32) * 5) / 9;
  outC = outC.toFixed(1);
  document.getElementById("outC").innerHTML = outC;
}

document.getElementById("btnC1").addEventListener("click", clear1);

function clear1() {
  document.getElementById("inF").value = "";
  document.getElementById("outC").innerHTML = "---";
}

document.getElementById("btn2").addEventListener("click", convert2);

function convert2() {
  let inC = parseFloat(document.getElementById("inC").value);
  let outF = (inC * 9) / 5 + 32;
  outF = outF.toFixed(1);
  document.getElementById("outF").innerHTML = outF;
}

document.getElementById("btnC2").addEventListener("click", clear2);

function clear2() {
  document.getElementById("inC").value = "";
  document.getElementById("outF").innerHTML = "---";
}
