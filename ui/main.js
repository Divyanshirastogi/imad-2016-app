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
                var span= document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done yet 
    };
    
   //make the request
   request.open('Get', 'hhtp:divyanshirastogi.imad.hasura-app.io/counter',true);
   request.send(null);
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function (){
    // make arequest to a server and send the name 
    
    //capture a list of names & render it as a list 
    var names =['name1','name2','name3','name4'];
    var list='';
   for( var i=0;i<names.length;i++){
    list='<li>'+   names[i[j]]+'</li>';
   }
   var ul=document.getElementById('namelist');
   ul.innerHTML=list;
};