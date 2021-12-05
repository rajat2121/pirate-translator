var textInput = document.querySelector("#txt-input");
var btnText = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#txt-output");




var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function translatedUrl(text){
     var finalUrl = serverUrl +"?"+"text= "+text.value;
     return (finalUrl);
}

function errorHandler(error){
    console.log("Error occured : ",error);
    alert("error occured : "+ error);
}
btnText.addEventListener("click",function addEventHandler(){
     var FinalUrl = translatedUrl(textInput);

     fetch(FinalUrl) 
     .then(Response => Response.json())
     .then(json => {
        //  textOutput.innerText = json.contents.translated ;
        console.log(json)
       
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;

     })
            
    
     .catch(errorHandler);
})