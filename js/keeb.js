 (function(window, document, undefined) {
     window.onload = init;

     function init() {
        document.body.addEventListener('keydown', (e) => {
            //document.getElementById(e.code.toLowerCase()).className = "raise";

            console.log(e.code);
        })

        document.body.addEventListener('keyup', (e) => {
            document.getElementById(e.key.toLowerCase()).className = "";
            console.log(e.code);
        })
     }
 })(window, document, undefined);
 
 


