 (function(window, document, undefined) {
     window.onload = init;
     let LShift = false;
     let RShift = false;
     let tabKeyPressed = false;

     function init() {
        document.body.addEventListener('keydown', (e) => {
            if(e.code === 'ShiftLeft') {
                LShift = true;
            }

            if(e.code === 'ShiftRight'){
                RShift = true;
            }

            if(e.code === 'Tab') {
                tabKeyPressed = true;
            }

            // if(LShift || RShift) {
            //     let temp = document.getElementById("mainKeyboard").querySelectorAll("#mainKeyboard>div > div");
            //     for(let i = 0; i < temp.length; ++i) {
            //         if(!temp[i].classList.contains("raiseBlue"))
            //             temp[i].className += " raiseBlue "
            //     }
            // }

            if(!document.getElementById(e.code).classList.contains("raise"))
                document.getElementById(e.code).className += " raise ";
            
            if(!document.getElementById(e.code).classList.contains("pressed")) {
                document.getElementById(e.code).className += " pressed "
            }
            //console.log(e.code);
        })

        document.body.addEventListener('keyup', (e) => {
            if(e.code === 'ShiftLeft')
                LShift = false;

            if(e.code === 'ShiftRight')
                RShift = false;

            // if(!LShift && !RShift) {
            //     let temp = document.getElementById("mainKeyboard").querySelectorAll("div, div");
            //     for(let i = 0; i < temp.length; ++i) {
            //         temp[i].classList.remove("raiseBlue");
            //     }
            // }
            
            if(tabKeyPressed) {
                tabKeyPressed = false;
                document.getElementById("Tab").classList.remove("raise");
            }

            document.getElementById(e.code).classList.remove("raise");
            console.log(e.code);
        })
     }
 })(window, document, undefined);
 
 


