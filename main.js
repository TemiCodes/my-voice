var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()
function start() {
    document.getElementById("voice_here").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("voice_here").innerHTML = content
}