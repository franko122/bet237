function Odds() { 
    let rightvisual = document.getElementById("rightvisual");
    let navigate1 = document.getElementById("navigate1")
    let  leftmatch = document.getElementById("leftmatch");
    let  liveContainerside = document.getElementById("liveContainerside");
    let mainbug = document.getElementById("mainbug");
    let seconviual = document.getElementById("seconviual");
    let lose = document.getElementById("lose");
    let oneodder = document.getElementById("oneodder");
    let secodd = document.getElementById("secodd"); 
    let thirdod = document.getElementById("thirdod")
    let green = "green"
    thirdod.addEventListener("click",()=>{
       if (oneodder.style.backgroundColor == green || secodd.style.backgroundColor==green) {
          secodd.style.backgroundColor="rgb(207, 207, 207)";
          secodd.style.color="black";
          thirdod.style.color="white";
          thirdod.style.backgroundColor="green"; 
          oneodder.style.color="black";
          oneodder.style.backgroundColor="rgb(207, 207, 207)";
       } 
       thirdod.style.backgroundColor="green";
       thirdod.style.color="white"
    })
    
    oneodder.addEventListener("click",()=>{
      if (secodd.style.backgroundColor== green || thirdod.style.backgroundColor == green ||  oneodder.style.backgroundColor == green ) {
          secodd.style.backgroundColor="rgb(207, 207, 207)";
          secodd.style.color="black"
          thirdod.style.backgroundColor="rgb(207, 207, 207)";
          thirdod.style.color="black"
          oneodder.style.backgroundColor="rgb(207, 207, 207)";
          oneodder.style.color="black";
      }
       else{ 
       oneodder.style.backgroundColor="green";
       oneodder.style.color="white";
      }
    })

    secodd.addEventListener("click",()=>{
     if (oneodder.style.backgroundColor == green || thirdod.style.backgroundColor == green  || secodd.style.backgroundColor == green) { 
       oneodder.style.backgroundColor=" rgb(207, 207, 207)"
       oneodder.style.color=" black"
       secodd.style.color=" white"
       secodd.style.backgroundColor="green"; 
       thirdod.style.backgroundColor="rgb(207, 207, 207)"
       thirdod.style.color="black"
     }  
     else{ 
       secodd.style.backgroundColor="green";
       secodd.style.color="white";
      }
    }) 
    rightvisual.addEventListener('click',()=>{
     rightvisual.style.backgroundColor="white";
     rightvisual.style.color="black";
     leftmatch.style.backgroundColor="green";    
     leftmatch.style.color="white";  
     liveContainerside.style.display="none";
     seconviual.style.display="block";
    });

    leftmatch.addEventListener('click',()=>{
       leftmatch.style.backgroundColor="white";
       leftmatch.style.color="black"; 
       rightvisual.style.backgroundColor="green";
       rightvisual.style.color="white";   
     liveContainerside.style.display="block";
     seconviual.style.display="none";
    })
}
Odds()