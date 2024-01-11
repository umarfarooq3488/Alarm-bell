var img = document.querySelector(".img");
var alarmText = document.querySelector(".alarmText");
var audio = new Audio();
audio.src = "alarm_clock_old.mp3";
var isAlarmSet = false;
var setTimeInterval;

function setAlarm() {
  var timeInput = document.getElementById("timeInput").value;
  isAlarmSet = true;
  alarmText.innerHTML = `Alarm is set at ${timeInput}`;
  if (isAlarmSet) {
    setTimeInterval = setInterval(() => {
      let compTime = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
      // Extract hours and minutes from timeInput and compTime
      let inputHours = parseInt(timeInput.split(":")[0]);
      let inputMinutes = parseInt(timeInput.split(":")[1]);
      let compHours = parseInt(compTime.split(":")[0]);
      let compMinutes = parseInt(compTime.split(":")[1]);

      if (inputHours === compHours && inputMinutes === compMinutes) {
        img.classList.add("active");
        alarmText.innerHTML = "Alarm Started";
        audio.play();
        setTimeout(() => {
          img.classList.remove("active");
          alarmText.innerHTML = "Alarm stopped";
          audio.pause();
        }, 60000);
      }
    }, 1000);
  }
}
function stopAlarm() {
  clearInterval(setTimeInterval);
  alarmText.innerHTML = "Alarm Stopped!";
  img.classList.remove("active");
  audio.pause();
  timeInput = "";
}