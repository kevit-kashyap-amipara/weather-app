const request=require('request');
//Function to find adressline.temperature from lat and long

const forecast=(lat,long,callback)=>{
 const url = `http://api.weatherstack.com/current?access_key=73a0347f8f86bb6585dea82251e05ee4&query=${lat},${long}&units=f`;
//    console.log(url);
    const ans=request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect!!",undefined);
        }
        else if(response.body.error){
            callback('Unable to find  Location !! ');
        }
        else {
            callback(undefined,{
                lat:response.body,
                // lat:response.body.data[0]['latitude'],
                // long:response.body.data[0]['longitude'],
                // location:response.body.data[0]['label']
            })
        }
    })


}
module.exports=forecast;