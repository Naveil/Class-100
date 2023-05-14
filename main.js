var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        speak();

    }
    
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function speak(){
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        downloadSelfie();
    },5000);
}

function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'">';

    });
}

function downloadSelfie(){
    link = document.getElementById("link");
    img = document.getElementById("selfie").src;
    link.href = img;
    link.click();
}