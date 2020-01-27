var soundstring="1 1 5 5 6 6 5 0 4 4 3 3 2 2 1 0 5 5 4 4 3 3 2 5 5 4 4 3 3 2 1 1 5 5 6 6 5 4 4 3 3 2 2 1 e";
var sound=[
    0.529732,0.594604,0.667420,
    0.707107,0.793701,0.890899,0.943874,1.059463,1.189207,1.334840,
    1.414214,1.587401,1.781797,1.887749
];
var str=[
    "u5","u6","u7",
    "1","2","3","4","5","6","7",
    "o1","o2","o3","o4"
];
const MeoWS = require('meowslib');
const WSServer = MeoWS.WSServer;
const BuildSession = MeoWS.BuildSession;
let wss = new WSServer(23333);
function ys(){
    console.log("pass");
}
wss.on('client', (session, request) => {
	console.log(request.connection.remoteAddress + ' connected!');
	session.tellraw('');
	BuildSession.createAndBind(session);
	session.on('onMessage',(msg, player)=>{
		if(msg=="play"){
            let r=soundstring.split(" ");
            for(let i=0;i<r.length;i++){
                if(r[i]=="0"){
                    for(let u=0;u<=500000000;u++){}
                    continue;
                }
                if(r[i]=="e")break;
                for(let j=0;j<=str.length;j++){
                    if(r[i]==str[j]){
                        session.sendCommand(`playsound liquid.lavapop @s ~ ~ ~ 20 ${sound[j]}`);
                        console.log(str[j]);//note.harp
                        break;
                    }
                }
                for(let u=0;u<=500000000;u++){}
            }
            console.log("end");
        }
	});
});