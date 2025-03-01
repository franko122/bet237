// slide js start here
function Startside(){
      let wel = document.getElementById("wel");
      let tant = document.getElementById("tant");
      let rite = document.getElementById("rite");
      let bet = document.getElementById("bet");
      let load2 = document.getElementById("load2");
      setTimeout(() => {
        load2.style.display="none"
      }, 5000);
      setTimeout(() => {
        bet.style.display="block"
        rite.style.display="none"
      }, 22000);
      setTimeout(() => {
        rite.style.display="block";
        tant.style.display="none";
      }, 15000); 
       setTimeout(() => {
        tant.style.display="block"
      }, 8000);
      setTimeout(() => {
        wel.style.display="none"
      }, 7000);
}
Startside()
// slide js ends here


// odd start here
function Odds() { 
     let rightvisual = document.getElementById("rightvisual");
     let navigate1 = document.getElementById("navigate1")
     let  leftmatch = document.getElementById("leftmatch");
     let  liveContainerside = document.getElementById("liveContainerside");
     let mainbug = document.getElementById("mainbug");
     let seconviual = document.getElementById("seconviual");
     let lose = document.getElementById("lose");
     lose.addEventListener('click',()=>{
       navigate1.style.width="0px"
     })
     mainbug.addEventListener('click',()=>{ 
      navigate1.style.width="100%"
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
// odd ends here