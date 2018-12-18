const Discord = require ('discord.js')
const client = new Discord.Client()

var prefix = '.';
var token = 'NTIzNDI5OTk0MTEwNjQ4MzQy.DvqygQ.sHSyaTUV8H-Fc0mxrkae71KfxqM' //lien du Bot : https://discordapp.com/oauth2/authorize?client_id=522470020211539968&scope=bot&permissions=8

client.login(token)

client.on('ready' , function (){
	client.user.setActivity("me developper")
	console.log("Je suis connecte")
})

client.on('message' , message =>{
		if(message.content === "tu fais quoi ?"){
			message.reply('je te viole :sueur:');
			console.log('un fdp Vien de se faire violer');
		}

		if (message.content === prefix + "createur"){
			 message.channel.send("**bot cree par Flow**")
			 console.log("une personne a excuter la commande : !createur")
		}

		if (message.content === prefix + "help"){
				var embed = new Discord.RichEmbed()
					   .setTitle("Help")
					   .setDescription("commande du Bot")
					   .addField(".help","Page d'aide", true)
					   .addField(".createur","affiche le createur", true)
					   .addField(".flow","a toi de voir :)", true)
					   .addField(".deco","pour deconnecter le bot.", true)
					   .addField(".kick","pour kick un utilisateur.", true)
					   .addField(".ban","pour bannir un utilisateur.", true)
					   .setColor("0xDBA901")
					   .setFooter("Bon moment parmis nous :D")
				message.channel.sendEmbed(embed);
		}
});

		client.on('guildMemberAdd', member =>{
    	var embed = new Discord.RichEmbed()
        .setDescription(' :tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes desormais ' + member.guild.memberCount)
    	member.guild.channels.get('517845731751755788').send(embed)
    	member.addRole('523211528036417536')
    	console.log("+1 nouveau membre");
    
});

client.on('message' , message =>{
		if(message.content === prefix + "flow"){
			message.channel.send('flow est un fils de pute de trolleur et niqueur de daronne ;)');
			console.log("un utilisateur vient d'executer la commande : !help");
		}
});

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});
 
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 1})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

client.on('message' , message =>{
		if(message.content === prefix + "del"){
			message.channel.send("J ai supprimer votre message.");
			console.log("un utilisateur vient d'executer la commande : !del");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});

client.on('message', message => {
		if(message.content === prefix + "bite"){
			message.channel.send("ma bite dans ta bouche");
			console.log("+1 bébé");
			message.delete();
		}
});
