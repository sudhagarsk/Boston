import { boston } from "./boston.js";
var bostondata=boston.data;
var ele="";
 
for(let i=0;i<bostondata.length;i++){
    for(let j=i+1;j<bostondata.length;j++){
        if(bostondata[i][11]<bostondata[j][11]){
            let temp=bostondata[i];
            bostondata[i]=bostondata[j];
            bostondata[j]=temp;
        }
        
    }
   

}
 var data=bostondata.slice(0,5);
 for(let i=0;i<5;i++){
ele+="<h2>" + data[i][8] + "</h2>" + "<h3>" + data[i][11] + "</h3>";
}
document.getElementById("app").innerHTML="<ul>"+ele+"</ul>";
