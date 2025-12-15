const inputBox= document.getElementById("input box");
const ListBox= document.getElementById("listcont");

function addtask(){
    if(inputBox.value===''){
        alert("You Must write Something !");
    }else{
        let list =document.createElement('li');
        list.innerHTML=inputBox.value;
        ListBox.appendChild(list);

        // Add a cross Button
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        list.appendChild(span);
   
    }
    inputBox.value='';
    
}