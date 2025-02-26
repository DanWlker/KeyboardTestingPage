(function (window, document, _) {
  window.onload = init;
  let frequencyMap = new Map();

  let appendToLog = function (key) {
    if (key === " ") {
      key = "Space";
    }

    let tempListItem = document.createElement("li");
    tempListItem.className = "logBox";
    tempListItem.textContent = key;
    document.getElementById("logHolder").prepend(tempListItem);
    setTimeout(function () {
      tempListItem.className = tempListItem.className + " show";
    }, 6);
  };

  let updateFrequency = function (pressedKey) {
    frequencyMap.set(pressedKey, (frequencyMap.get(pressedKey) || 0) + 1);
    let currentFrequency = frequencyMap.get(pressedKey);
    console.log(currentFrequency);

    let cornerKeyId = `${pressedKey}_corner`;
    let cornerText = document.getElementById(cornerKeyId);

    if (!cornerText) {
      cornerText = document.createElement("div");
      cornerText.id = cornerKeyId;
      cornerText.className = "cornerText";
      document.getElementById(pressedKey).prepend(cornerText);
    }

    cornerText.textContent = currentFrequency;
  };

  let downKeyDo = function (e, pressedKey) {
    if (!document.getElementById(pressedKey).classList.contains("raise"))
      document.getElementById(pressedKey).className += " raise ";

    if (!document.getElementById(pressedKey).classList.contains("pressed")) {
      document.getElementById(pressedKey).className += " pressed ";
    }

    updateFrequency(pressedKey);
    appendToLog(e.key);
  };

  let upKeyDo = function (pressedKey) {
    document.getElementById(pressedKey).classList.remove("raise");
  };

  let getAlternateKeyRepresentation = function (key) {
    switch (key) {
      case "MetaLeft":
        return "OSLeft";
      case "MetaRight":
        return "OSRight";
      case "Help":
        return "Insert";
    }

    return key;
  };

  function init() {
    document.body.addEventListener("keydown", (e) => {
      let pressedKey = e.code;
      console.log(pressedKey);

      e.preventDefault();

      pressedKey = getAlternateKeyRepresentation(pressedKey);

      // We need to handle caps lock somewhat hackily on Mac
      if (pressedKey === "CapsLock") {
        let capsLockOn = e.getModifierState("CapsLock");
        if (capsLockOn !== true) {
          upKeyDo(pressedKey);
          updateFrequency(pressedKey);
          appendToLog(e.key);
          return;
        }
      }

      downKeyDo(e, pressedKey);
    });

    document.body.addEventListener("keyup", (e) => {
      let pressedKey = e.code;
      console.log(pressedKey);

      if (pressedKey === "PrintScreen") {
        if (!document.getElementById(pressedKey).classList.contains("pressed"))
          document.getElementById(pressedKey).className += " pressed ";
        appendToLog(e.key);
      }

      // We handle caps lock in KeyUp
      if (pressedKey === "CapsLock") {
        return;
      }

      pressedKey = getAlternateKeyRepresentation(pressedKey);

      upKeyDo(pressedKey);
    });

    document.getElementById("resetButton").onclick = function () {
      console.log("Resetting...");
      let temp = document.querySelectorAll(".key");
      for (let i = 0; i < temp.length; ++i) {
        temp[i].classList.remove("raise");
        temp[i].classList.remove("raiseBlue");
        temp[i].classList.remove("pressed");
      }
      frequencyMap.clear();
      let temp_2 = document.querySelectorAll(".cornerText");
      for (let i = 0; i < temp_2.length; ++i) {
        temp_2[i].textContent = "";
      }
    };
  }
})(window, document, undefined);
