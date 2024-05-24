 (function(window, document, undefined) {
     window.onload = init;
     let LShift = false;
     let RShift = false;
     let frequencyMap = new Map();

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

            if(pressedKey == 'PrintScreen') {
                if(!document.getElementById(pressedKey).classList.contains("pressed")) 
                    document.getElementById(pressedKey).className += " pressed ";
                
                let tempDiv = document.createElement("div");
                tempDiv.className = "logBox";
                tempDiv.textContent = e.key;
                document.getElementById("logHolder").prepend(tempDiv);
            }
                
            
            if(pressedKey === "MetaLeft")
                pressedKey = "OSLeft";

            if(pressedKey === "MetaRight")
                pressedKey = "OSRight";
            

            document.getElementById(pressedKey).classList.remove("raise");
            frequencyMap.set(pressedKey, (frequencyMap.get(pressedKey) || 0) + 1);
            let currentFrequency = frequencyMap.get(pressedKey);
            console.log(currentFrequency);

            let cornerKeyId = `${pressedKey}_corner`;
            let cornerText = document.getElementById(cornerKeyId);

            if(!cornerText) {
                cornerText = document.createElement("div");
                cornerText.id = cornerKeyId;
                cornerText.className = "cornerText"
                document.getElementById(pressedKey).prepend(cornerText);
            }

            cornerText.textContent = currentFrequency;
        })

        document.getElementById("resetButton").onclick = 
            function() {
                console.log("Resetting...");
                let temp = document.querySelectorAll(".key");
                for(let i = 0; i < temp.length; ++i) {
                    temp[i].classList.remove("raise");
                    temp[i].classList.remove("raiseBlue");
                    temp[i].classList.remove("pressed");
                }
                frequencyMap.clear();
                let temp_2 = document.querySelectorAll(".cornerText");
                for(let i = 0; i < temp_2.length; ++i) {
                    temp_2[i].textContent = "";
                }
            }

     }
 })(window, document, undefined);
 
 


