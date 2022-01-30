 (function(window, document, undefined) {
     window.onload = init;
     let LShift = false;
     let RShift = false;

     function init() {
        document.body.addEventListener('keydown', (e) => {
            let pressedKey = e.code;
            console.log(pressedKey);

            if(pressedKey === 'ShiftLeft') {
                LShift = true;
            }

            if(pressedKey === 'ShiftRight'){
                RShift = true;
            }

            e.preventDefault();

            // if(LShift || RShift) {
            //     let temp = document.getElementById("mainKeyboard").querySelectorAll("#mainKeyboard>div > div");
            //     for(let i = 0; i < temp.length; ++i) {
            //         if(!temp[i].classList.contains("raiseBlue"))
            //             temp[i].className += " raiseBlue "
            //     }
            // }

            if(pressedKey === "MetaLeft")
                pressedKey = "OSLeft";

            if(pressedKey === "MetaRight")
                pressedKey = "OSRight";

            if(!document.getElementById(pressedKey).classList.contains("raise"))
                document.getElementById(pressedKey).className += " raise ";
            
            if(!document.getElementById(pressedKey).classList.contains("pressed")) {
                document.getElementById(pressedKey).className += " pressed "
            }

            let tempDiv = document.createElement("div");
            tempDiv.className = "logBox";
            tempDiv.textContent = e.key;
            document.getElementById("logHolder").prepend(tempDiv);
        })

        document.body.addEventListener('keyup', (e) => {
            let pressedKey = e.code;
            console.log(pressedKey);

            if(pressedKey === 'ShiftLeft')
                LShift = false;

            if(pressedKey === 'ShiftRight')
                RShift = false;

            // if(!LShift && !RShift) {
            //     let temp = document.getElementById("mainKeyboard").querySelectorAll("div, div");
            //     for(let i = 0; i < temp.length; ++i) {
            //         temp[i].classList.remove("raiseBlue");
            //     }
            // }

            if(pressedKey == 'PrintScreen')
                if(!document.getElementById(pressedKey).classList.contains("pressed")) 
                    document.getElementById(pressed).className += " pressed ";
            
            if(pressedKey === "MetaLeft")
                pressedKey = "OSLeft";

            if(pressedKey === "MetaRight")
                pressedKey = "OSRight";
            

            document.getElementById(pressedKey).classList.remove("raise");
        })

        document.getElementById("resetButton").onclick = 
            function() {
                console.log("Hello");
                let temp = document.querySelectorAll(".key");
                for(let i = 0; i < temp.length; ++i) {
                    temp[i].classList.remove("raise");
                    temp[i].classList.remove("raiseBlue");
                    temp[i].classList.remove("pressed");
                }
            }

     }
 })(window, document, undefined);
 
 


