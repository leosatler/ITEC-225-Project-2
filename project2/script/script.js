function cc2mc() {
  const c2mc = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ",": "--..--",
    ".": ".-.-.-",
    "?": "..--..",
    "/": "-..-.",
    "-": "-....-",
    "(": "-.--.",
    ")": "-.--.-",
    " ": "|",
  };
  const convertToMorse = (str) => {
    return str
      .toUpperCase()
      .split("")
      .map((x) => {
        return c2mc[x] ? c2mc[x] : x;
      })
      .join("");
  };
  let txt2 = document.getElementById("input").value;

  let ans = convertToMorse(txt2);
  document.getElementById("output").value = ans;
}

morse = function cmc2c() {
  const mc2c = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "--..--": ",",
    ".-.-.-": ".",
    "..--..": "?",
    "-..-.": "/",
    "-....-": "-",
    "-.--.": "(",
    "-.--.-": ")",
    "|": " ",
    " ": "",
  };
  let txt = document.getElementById("input").value.toString();
  let txt2 = txt.split("");
  let ans = "";
  for (let i = 0; i < txt2.length; i++) {
    ans += mc2c[charAt(i)] + " ";
  }
  document.getElementById("output").value= ans;
// I dont understand what's happening with this function it was working
// Now it's not working at all
}

function erase(){
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

