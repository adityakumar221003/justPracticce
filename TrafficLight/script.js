// red=document.getElementById("redBulb");
// yellow=document.getElementById("yellowBulb");
// green=document.getElementById("greenBulb");
setInterval(timeCalculation,1000);
time=10;
count=1;
function timeCalculation(){
 
    if(time<0){
       


        if(count==1){
            document.getElementById('redBulb').style.backgroundColor="red"
            document.getElementById("direction").innerHTML="Stop"

            document.getElementById('yellowBulb').style.backgroundColor="rgb(255, 255, 4,0.2)"

            document.getElementById('greenBulb').style.backgroundColor="rgba(4, 123, 4, 0.2)"
        }
        if(count==2){
           document.getElementById('redBulb').style.backgroundColor=" rgb(249, 4, 4,0.2)"

            document.getElementById('yellowBulb').style.backgroundColor="yellow"
            document.getElementById("direction").innerHTML="Keep going"
            
            document.getElementById('greenBulb').style.backgroundColor="rgba(4, 123, 4, 0.2)"
        }
        if(count==3){
            document.getElementById('redBulb').style.backgroundColor=" rgb(249, 4, 4,0.2)"

            document.getElementById('yellowBulb').style.backgroundColor="rgb(255, 255, 4,0.2)"
            
            document.getElementById('greenBulb').style.backgroundColor="green"
            document.getElementById("direction").innerHTML="Go "
        }
        
        count++;
        if(count==4){
            count=0;
        }
        time=10;
    }
document.getElementById("timeBox").innerHTML=time;
time--

}
