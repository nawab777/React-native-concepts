

export const Getcities='Getcities';
export const getlat='getlat';
export const getlong='getlong';


const URL='https://mocki.io/v1/6e710ba6-ec99-40b4-8e2c-95da3e6b3699';
export const showplaces=()=>{
    console.log('jsd')
     return async dispatct=>
     { 
    const result=await fetch(URL,{ method:'GET',headers:{ 'Content-type':'application/json'} });
    // .then((result) => result.json())
    // .then((json)=>{
        const json=await result.json();
         if(json){
          dispatct({
                    type:Getcities,
                     payload:json

    })
     }
     else{
         console.log('unable to fetch!')
     }
        console.log('json response', json)
    
    //  const json=result.json();
    //  console.log('here is response',result);
    //  if(json){
    //       dispatch({
    //                 type:Getcities,
    //                  payload:json

    // })
    //  }else{
    //      console.log('unable to fetch!')
    //  }
}

    

}
export const getlatitude=(lat)=>{

return{
    type:getlat,
    payload:lat
}


}
export const getlongitude=(long)=>{

    return{
        type:getlong,
        payload:long
    }


}

