let input = document.querySelector("input"),
  btn = document.querySelector(".btn"),
  icon = document.querySelector(".btn i");

let sobhanAllah = document.querySelector(".sobhanAllah p"),
  alhamdAllah = document.querySelector(".alhamdAllah p"),
  la = document.querySelector(".la p"),
  allahAkbar = document.querySelector(".allahAkbar p");

let count1 = 0,
  count2 = 0,
  count3 = 0,
  count4 = 0;

let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log("Supported");
  let recognition = new SpeechRecognition();
  recognition.lang = "Ar";

  btn.addEventListener("click", () => {
    if (icon.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  recognition.addEventListener("start", () => {
    icon.classList.replace("fa-microphone", "fa-microphone-slash");
  });
  recognition.addEventListener("end", () => {
    icon.classList.replace("fa-microphone-slash", "fa-microphone");
  });

  recognition.addEventListener("result", (e) => {
    let transcript = e.results[0][0].transcript;
    if (transcript == "سبحان الله") {
      count1++;
      sobhanAllah.innerHTML = count1;
      colorize(sobhanAllah);
    } else if (transcript == "الحمد لله") {
      count2++;
      alhamdAllah.innerHTML = count2;
      colorize(alhamdAllah);
    } else if (transcript == "لا اله الا الله") {
      count3++;
      la.innerHTML = count3;
      colorize(la);
    } else if (transcript == "الله اكبر") {
      count4++;
      allahAkbar.innerHTML = count4;
      colorize(allahAkbar);
    }
  });
} else {
  console.log("Not Supported");
}

function colorize(param) {
  if (param.innerHTML >= 33) {
    param.style.color = "#1b5e20";
  }
}
