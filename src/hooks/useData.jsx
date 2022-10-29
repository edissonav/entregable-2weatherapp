import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



const useData = () => {

    const [data, setdata]=useState({})
    
    useEffect(()=>{
    

  
    
        function success(pos) {
          const lat = pos.coords.latitude
          const lon = pos.coords.longitude
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f728b52e952f91b3788d4d6b02d803c6`)
          .then((res)=> setdata(res.data) )
         
        }
        
        
        navigator.geolocation.getCurrentPosition(success);
      
      
      
     
    
        
      },[])

    return {data, setdata}
};

export default useData;