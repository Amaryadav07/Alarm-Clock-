let inter;
let alarmPlaying = false;

let alarm = () => {
    inter = setInterval(() => {
        let show = document.querySelector("#display");
        let inp = document.querySelector("#input").value;
        let time = new Date();
        let alarmtime = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;

        

        if (alarmtime == inp) {
            show.innerHTML = "Alarm is ringing";
            show.style.background = "green";
        
            document.querySelector("#aud").play();
            alarmPlaying = true;
            setTimeout(() => {
                document.querySelector("#aud").pause();
               
                clearInterval(inter);
                alarmPlaying = false;
            }, 40000);
        } else {
            show.innerHTML = "Alarm set";
        }

    }, 1000);
};


let stopAlarm = () => {
    if (alarmPlaying) {
        document.querySelector("#aud").pause();
        clearInterval(inter);
        document.querySelector("#display").innerHTML = "Alarm stopped";
        document.querySelector("#display").style.background="red";
       
        alarmPlaying = false;
    } else {
        document.querySelector("#display").innerHTML = "No alarm to stop";
       
    }
};
