
alert("please tick one of the boxes below");
var generate = document.querySelector("#getpass");
var clipboard = document.querySelector("#copyclip");
var box1 = document.querySelector("#con1");
var box2 = document.querySelector("#con2");


function password() {
    // local variables to use within function
    var alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charac = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    var result = '';
    var mixedchar = alphabets + charac;
    var charCount = Math.floor(Math.random() * (128 - 8) + 8);

    // conditions

    if (box1.checked) {
        // cycle through random numbers between 128-1 (charcount)
        for (var i = 0; i < charCount; i++) {
            //combine random numbers with random letters 
            result += alphabets[Math.floor(Math.random() * alphabets.length)]
        }
        document.querySelector('#password').value = result;
    }
    if (box2.checked) {
        for (var i = 0; i < charCount; i++) {

            result += mixedchar[Math.floor(Math.random() * mixedchar.length)]
        }
        document.querySelector('#password').value = result;
    }
}
// Listen for user click and apply function

generate.addEventListener("click", password);

// copy to clipboard

function copy() {
    document.querySelector("#password").select();
    document.execCommand("Copy");
    alert("you have copied your password to the clipboard");

}
clipboard.addEventListener("click", copy);

