
    alert("please tick one of the boxes below");
    var generate= document.querySelector("#getpass");
    var clipboard= document.querySelector("#copyclip");
    var box1= document.querySelector("#con1");
    var box2= document.querySelector("#con2");

    
function password () {
  // local variables to use within function
    var alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charac = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
        var result = '';
        var choices= alphabets + charac;
        var charCount = Math.floor(Math.random()*(128-8) + 8);
        
        // conditional if of the selections
        if (box1.checked) {
            for(var i = 0; i<charCount;i++){  

                result += alphabets[Math.floor(Math.random()*(alphabets.length))]
                 }
                 document.querySelector('#password').value = result;
                }


                if (box2.checked) {
                    for(var i = 0; i<charCount;i++){  

                        result += choices[Math.floor(Math.random()*(choices.length))]
                         }
                         document.querySelector('#password').value = result;
                }

              
        }
        

        generate.addEventListener("click", password);

// copy to clipboard function
        function copy() {
            document.querySelector("#password").select();
            document.execCommand("Copy");
            alert("you have copied your password");
        
    
        }
    
        clipboard.addEventListener("click",copy);
    



    
            








     
    


