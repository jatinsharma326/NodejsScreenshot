
const webshot = require('webshot');
const opn = require('opn');
opn('http://youtube.com');
opn('http://youtube.com',{app:'firefox'});
opn('http://youtube.com',{app:['google chrome','--incognito']});
const options = 
{
    streamType:  "png",
    windowSize:{
        width:1024,
        height:786
    },
        shotSize:{
            width:"all",
            height:"all"
        }
    
};
