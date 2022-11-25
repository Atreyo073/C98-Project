function speak()
{
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
    setTimeout(function(){
        take_snapshot();
        save();
    },10000);
    setTimeout(function(){
        take_snapshot();
        save();
    },15000);
    speak_data="In 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
}
function take_snapshot()
{
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id==img_1){
            document.getElementById("result1").innerHTML='<img id="img_1" src="'+data_uri+'"/>' ;
        }
        if(img_id==img_2){
            document.getElementById("result2").innerHTML='<img id="img_2" src="'+data_uri+'"/>' ;
        }
        if(img_id==img_3){
            document.getElementById("result3").innerHTML='<img id="img_3" src="'+data_uri+'"/>' ;
        }
    });
}