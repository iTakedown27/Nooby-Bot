const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const adminCode = 2765420;
const adminCodeTries = 5;
const fs = require('fs');

client.commands = new Discord.Collection();
client.descriptions = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = 'nooby ';
let facts = ['Breh', '6 times 9 plus 6 plus 9 equals 69!'];
let greets = ['Howdy!', 'Hi!', 'Hello!', 'Sup!', 'Greetings'];
let fails = ['https://media.tenor.com/videos/1417936746a4dc1bd4f0e0a38227d1e7/mp4'];
let roasts = ['You eat more than you live.', 'It seems that only your body is growing, not the brain...', 'Get a life.', 'You\'re using me because your family left you.', 'You spend a lot of time with me instead of getting straight A\'s.'];

client.once('ready', () => {
    console.log('Hello hello!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (command === 'brain') {
        client.commands.get('brain').execute(message, args);
    } else if (command === 'fact') {
        client.commands.get('fact').execute(message, args, facts);
    } else if (command === 'hello' || command === 'hi') {
        client.commands.get('hello').execute(message, args, greets);
    } else if (command === 'roast') {
        client.commands.get('roast').execute(message, args, roasts);
    } else if (command === 'bye') {

    } else if (command === 'help') {
        message.channel.send('Command descriptions in development.');
        const trimmed = [];
        for (const file of commandFiles) {
            var comm = prefix;
            comm += file.replace('.js', '');
            trimmed.push(comm);
        }
        message.channel.send(trimmed);

    }
})

function answerQuestion(question) {
    const words = ['do', 'you', 'like'];
    var intelligible = true;
    for (let i = 0; i < words.length; i++) {
        if (question.indexOf(words[i]) >= 0) {
            intelligible = false;
            break;
        }
    }
    if (intelligible) {

    } else {
        return "That is an unintelligible question.";
    }
}

function addContent(list, content) {
    list.push(content);
}

function removeContent(list, begin, end, target) {
    // binary search

    var mid = (begin + end)/2;
    if (list[mid] > target) {
        end = mid - 1;
        return removeFact(list, begin, end, target);
    }

    if (list[mid] < target) {
        begin = mid + 1;
        return removeFact(list, begin, end, target);
    }

    if (list[mid] === target) {
        list.pop(mid);
    }

    return `The content "${target}" that you were looking for does not exist in the list. `;
}

function showDashboard() {
    console.log('Welcome to Nooby Bot Control Panel!');
    console.log('1. Notifications');
    console.log('2. Change something');
    var choice = window.prompt('', 1);
    switch (choice) {
        case 1:
            
            break;
        
        case 2:
            break;
    }
}

client.login(config.token);
// Last line