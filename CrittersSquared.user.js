// ==UserScript==
// @name         CrittersSquared
// @namespace    https://discord.gg/dY4gjw8
// @version      0.2
// @description  A bunch of box critters mod put into one extension.
// @author       joshhies
// @match        https://boxcritters.com/play/index.html
// @grant        none
// ==/UserScript==


var jokes = [ // Updating Jokes VERY SOON //
    {"j":"What do you call a hamster in a tophat?","p":"Abrahamster Lincoln!"},
    {"j":"Where does a hamster go for vacation?","p":"Hamsterdam!"},
    {"j":"What do you call a hamster with no legs?","p":"A furball!"},
    {"j":"What do you call a hamster that can't run in a wheel?","p":"Hamateur."},
    {"j":"Why was the hamster upset with his job?","p":"It didn't pay enough celery."},
    {"j":"What do you call a hamster with three legs?","p":"Hamputee."},
    {"j":"What happens when two snails get into a fight?","p":"They slug it out!"},
    {"j":"Why is the snail the strongest animal?","p":"Because he carries a house on his back!"},
    {"j":"How do snails make important calls?","p":"On shell phones."},
    {"j":"What kind of car does a raccoon drive?","p":"A furrari."}
]

// Code for delay function

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

// Runs on page load

window.addEventListener('load', function() {

    // Sets the theme to dark if browser supports webstorage

    var chatBar = document.getElementsByClassName("input-group")[0];
    var chatBox = document.getElementsByClassName("row justify-content-center")[1];
    var jokeBtnHTML = `<span class="input-group-btn"><button id="jokebtn" class="btn btn-success">Joke</button></span>`;
    var clapBtnHTML = `<span class="input-group-btn"><button id="clapbtn" class="btn btn-warning">Clap</button></span>`;
    var balloonoffBtnHTML = `<span class="input-group-btn"><button id="balloonoffbtn" class="btn btn-info">Chat Balloons On/Off</button></span>`;
    var nametagsonoffBtnHTML = `<span class="input-group-btn"><button id="nametagsonoffbtn" class="btn btn-info">Name Tags On/Off</button></span>`;
    var darkmodeBtnHTML = `<span class="input-group-btn"><button id="darkmodebtn" class="btn btn-danger">Darkmode On/Off</button></span>`;
    var tavernBtnHTML = `<span class="input-group-btn"><button id="tavernbtn" class="btn btn-danger">Join Tavern</button></span>`;
    var bridgeBtnHTML = `<span class="input-group-btn"><button id="bridgebtn" class="btn btn-danger">Join Bridge</button></span>`;
    chatBar.insertAdjacentHTML('beforeend', `<br />`);
    chatBar.insertAdjacentHTML('beforeend', jokeBtnHTML);
    chatBar.insertAdjacentHTML('beforeend', clapBtnHTML);
    chatBar.insertAdjacentHTML('afterend', balloonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', nametagsonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', darkmodeBtnHTML);
    chatBar.insertAdjacentHTML('afterend', tavernBtnHTML);
    chatBar.insertAdjacentHTML('afterend', bridgeBtnHTML);



    function sendJoke() {
        document.getElementById("inputMessage").value="";
        var joke = jokes[(Math.floor(Math.random() * jokes.length))]; // Retrieve random joke from variable
        world.sendMessage(joke.j); // Send the first part of the joke
        delay(function(){
            world.sendMessage(joke.p); // Send the punchline
        }, 5000 ); // end delay
    }

    function sendClap() {
        var message = document.getElementById("inputMessage").value;
        document.getElementById("inputMessage").value="";
        message = message.split(" ").join(" 👏🏻 ");
        message = " 👏🏻 "
        console.log(message);
        world.sendMessage(message);
    }

    function balloonoff() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/balloons"); // Turn chat balloons on/off
    }

    function nametagsonoff() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/nicknames"); // Turn name tags on/off
    }


    function darkmode() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/darkmode");
    }

    function jointavern() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/join tavern");
    }

    function joinbridge() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/join bridge");
    }



    var jokeBtn = document.querySelector ("#jokebtn");
    if (jokeBtn) {
        jokeBtn.addEventListener ("click", sendJoke, false);
    }
    var clapBtn = document.querySelector ("#clapbtn");
    if (clapBtn) {
        clapBtn.addEventListener ("click", sendClap, false);
    }

    var balloonoffBtn = document.querySelector ("#balloonoffbtn");
    if (balloonoffBtn) {
        balloonoffBtn.addEventListener ("click", balloonoff, false);
    }

    var nametagsonoffBtn = document.querySelector ("#nametagsonoffbtn");
    if (nametagsonoffBtn) {
        nametagsonoffBtn.addEventListener ("click", nametagsonoff, false);
    }


    var darkmodeBtn = document.querySelector ("#darkmodebtn");
    if (darkmodeBtn) {
        darkmodeBtn.addEventListener ("click", darkmode, false);
    }

    var jointavernBtn = document.querySelector ("#tavernbtn");
    if (jointavernBtn) {
        jointavernBtn.addEventListener ("click", jointavern, false);
    }
    var joinbridgeBtn = document.querySelector ("#bridgebtn");
    if (joinbridgeBtn) {
        joinbridgeBtn.addEventListener ("click", joinbridge, false);
    }

}, true);


