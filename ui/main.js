// Counter code
var button=document.getElementById('counter');

button.onclick = function () {
    
    //create a request object
    var request =new XTMLHttpRequest();
   
    
    //capture the response & store it in a variable
    request.onreadystatechange=function (){
        if(request.readyState===XTMLHttpRequest.Done){
            //take some action
            if (request.status===200){
                var counter=request.responseText;
                 span.innerHTML=counter.toString();
            }
        }
        //not done yet 
    };
    
   //make the request
   request.open('Get', 'hhtp:divyanshirastogi.imad.hasura-app.io/counter',true);
   request.send(null);
};