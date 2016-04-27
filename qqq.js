var exec = require('child_process').exec; 
var cmdStr = 'sh /usr/bin/obotest1.sh';
var Car= require('carctrol');
car=new Car();
var car=new carctrol();
var offl='sh offl.sh';
var mcs=require('mcsjs');
var myapp=mcs.register({
   deviceId:'D01FU2ue',
   deviceKey:'9Ln0nVA4rwNKIyOE',
});
console.log('mcs inited');
car.forward();
myapp.on('dj001',function(data,time){
  var value=+data;
  if(value==1)
  {  console.log(data);
     exec(cmdStr, function(err,stdout,stderr){
        if(err) {
          console.log('get weather api error:'+stderr);
          } 
      });
   }
   if(value==0)
   {
     console.log(data);
     exec(offl,function(err,stdout,stderr){
     if(err){
       console.log(get);
     }   
    });
   }
})
