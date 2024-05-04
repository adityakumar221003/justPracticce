

function getResult(){
    let result;
    let inputUnit=document.getElementById('inputUnitsId').value;

let input=parseInt(document.getElementById('input').value);
let outputUnit=document.getElementById('outputUnitsId').value;
let output=document.getElementById('output');

if(inputUnit=="Celcius" && outputUnit=="Celcius"){
    result=input;
    output.innerHTML=result;
}
else if(inputUnit=="Celcius" && outputUnit=="Fahrenheit"){
    //(0°C × 9/5) + 32 = F
    result=(input*1.8)+32
    output.innerHTML=result;
}
else if(inputUnit=="Celcius" && outputUnit=="Kelvin"){
    //   0°C +273.15=k 
    result=input+273.15
    output.innerHTML=result;
}

else if(inputUnit=="Fahrenheit" && outputUnit=="Celcius"){
    //   0°F -32 * 5/9 = C
    result=(input-32)*5/9;
    output.innerHTML=result;
}
else if(inputUnit=="Fahrenheit" && outputUnit=="Fahrenheit"){

    result=input
    output.innerHTML=result;
}
else if(inputUnit=="Fahrenheit" && outputUnit=="Kelvin"){
    //   0°F -32 * 5/9  + 273.15 = k
    result=((input-32)*5/9)+273.15;
    output.innerHTML=result;
}
else if(inputUnit=="Kelvin" && outputUnit=="Kelvin"){
    result=input;
    output.innerHTML=result;
}
else if(inputUnit=="Kelvin" && outputUnit=="Celcius"){
    result=input-273.15;
    output.innerHTML=result;
}
else if(inputUnit=="Kelvin" && outputUnit=="Fahrenheit"){
    result=(input-273.15) *1.8+32;
    output.innerHTML=result;
}

else if(inputUnit=="" || outputUnit==""){
   
alert("\tError!\tTemperature unit is missing.")
    result="";
    output.innerHTML=result;
}

}