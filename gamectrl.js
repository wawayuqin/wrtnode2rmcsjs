//var exec = require('child_process').exec; 
//var cmdStr = 'sh /usr/bin/obotest1.sh';
var Car= require('./carctrol');
car=new Car();
//var car=new carctrol();
//var offl='sh offl.sh';
var mcs=require('mcsjs');
var myapp=mcs.register({
   deviceId:'D01FU2ue',
   deviceKey:'9Ln0nVA4rwNKIyOE',
});
console.log('mcs inited');
//car.forward();
myapp.on('game001',function(data,time){
 // var value=+data;
 	if(data=='z|1')
 	{
 		car.turnLeft();
 	}
   if(data=='y|1')
 	{
 		car.turnRight();
 	}
 	if(data=='s|1')
 	{
 		car.forward();
 	}
 	if(data=='x|1')
 	{
 		car.back();
 	}
})
