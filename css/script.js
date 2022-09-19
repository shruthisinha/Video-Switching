const videoObject=document.getElementById('obj');
videoObject.addEventListener('ended',(event)=>{
   videoObject.src="videos/default.mp4";
});
  
window.addEventListener('keydown',check);
function check(t){
    if(t.keyCode=='49'){
     document.getElementById('obj').src="videos/01.mp4"; 
    }
    if(t.keyCode=='50'){
       document.getElementById('obj').src="videos/02.mp4";
    }
    if(t.keyCode=='51'){
       document.getElementById('obj').src="videos/default.mp4";
    }
    if(t.keyCode=='52'){
       document.getElementById('obj').src="videos/03.mp4";
    }
    if(t.keyCode=='53'){
       document.getElementById('obj').src="videos/04.mp4";
    }
    if(t.keyCode=='54'){
       document.getElementById('obj').src="videos/05.mp4";

    }
};

