const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!ship') {


      var characters = ["Edelgard","Hubert","Ferdinand","Caspar","Linhardt","Bernadetta","Petra","Dorothea",
    				  "Claude","Hilda","Lorenz","Ignatz","Raphael","Lysithea","Leonie","Marianne",
    				  "Dimitri","Dedue","Felix","Sylvain","Ingrid","Ashe","Annette","Mercedes",
    				  "Gatekeeper","Flayn","Cyril","Catherine","Shamir"];

    	var randA = Math.floor((Math.random() * 30) + 0);
    	var randB = Math.floor((Math.random() * 30) + 0);
    	
    	if (randA==randB){ 
    		var match = true;
    		while (match){
    			var randB = Math.floor((Math.random() * 30));
    			if (randA!=randB){ var match = false;}
    		}
    	}
    	
    	var first = characters[randA];
    	var second = characters[randB];
      
       message.reply(first+"/"+second);

       }
       
       

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
