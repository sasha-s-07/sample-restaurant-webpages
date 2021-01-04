window.onload=pageReady;
function pageReady(){

    var direction=document.getElementById("btnDir");
    var location=document.getElementById("lmap");
  
    
  
    direction.onclick=initMap;
    
    
     function initMap(){
           
        var default_view = {
          lat:43.78884669478819 ,
          lng:-79.39145024653189,
        };
       
        var map = new google.maps.Map(location, {
          zoom: 15,
          center: default_view,
        });
        new google.maps.Marker({
          position: default_view,map,
          title: "PIZZARIUm",
        });
        
      }
   } 

