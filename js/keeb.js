 (function(window, document, undefined) {
     window.onload = init;

     function init() {
        document.body.addEventListener('keydown', (e) => {
            document.getElementById(e.key)
            console.log(e.key);
        })
     }
 })(window, document, undefined);
 
 


