const inputbox = document.getElementById("inputbox");
const copyBtn = document.getElementById("copybtn");
const rangeLen = document.getElementById("length");
const lengthV = document.getElementById("lengthValue");
const uppercase = document.getElementById("uper");
const lowercase = document.getElementById("lower");
const numbercase = document.getElementById("num");
const symbolcase = document.getElementById("symbo");
const generate = document.getElementById("Generator");

const uppercaseC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseC = "abcdefghijklmnopqrstuvwxyz";
const numberC = "012345679";
const symbolC = "!@#$%&*";

function GeneratorPass() {
  let character = "";
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !numbercase.checked &&
    !symbolcase.checked
  ) {
    alert("Please select some box");
  } else {
    if (uppercase.checked) character += uppercaseC;
    if (lowercase.checked) character += lowercaseC;
    if (numbercase.checked) character += numberC;
    if (symbolcase.checked) character += symbolC;

    let Password = "";
    let length = parseInt(document.getElementById("length").value);

    for (let i = 0; i < length; i++) {
      const randomPasskey = Math.floor(Math.random() * character.length);
      Password += character[randomPasskey];
    }
    inputbox.value = Password;
  }
}
generate.addEventListener("click", GeneratorPass);
copyBtn.addEventListener("click", function () {});
lengthV.textContent = rangeLen.value;
rangeLen.addEventListener("input", () => {
  lengthV.textContent = rangeLen.value;
});

copyBtn.addEventListener("click", function () {
  if (inputbox.value == "") {
    alert("Plese first generate password");
  } else {
    inputbox.select();
    document.execCommand("copy");
    alert("Your Password is copy in clipbord");
  }
});
