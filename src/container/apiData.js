import axios from "axios"

const dataApi = async() =>{
try{
  var config = {
    method: 'get',
    url: 'https://api.npoint.io/97d89162575a9d816661',
    headers: { }
  };
  return new Promise (function(resolve){
 axios(config)
      .then((response)=>{
        resolve(response.data)
      })
      .catch(function (error) {
      console.log(error);
      });

  } )
}catch(err){
  console.log(err)
}
    
};

export default dataApi