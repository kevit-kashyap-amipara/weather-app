const request=require('request');
//Function to find lati, and longi, from adress line
const geocode=(address,callback)=>{
    const url='http://api.positionstack.com/v1/forward?access_key=1dcc649a39b56d9446e5e7c89024dba3&query='+encodeURIComponent(address);
    const ans=request({url:url,json:true},(error,response)=>{
        // console.log(error);
        // console.log(response);
        // console.log(response.body.data[0]['latitude']);
        if(error){
            callback("unable to connect!!",undefined);
        }
        else if(response.body.error){
            callback('Unable to find  Location !! ');
        }
        else {
            callback(undefined,{
                latitude:response.body.data[0]['latitude'],
                longitude:response.body.data[0]['longitude'],
                location:response.body.data[0]['label']
            })
        }
    })


}
module.exports=geocode;