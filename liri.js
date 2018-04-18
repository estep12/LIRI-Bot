require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var spotify2 = require("node-spotify-api");
var twitter = require("twitter");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var fs = require("fs");

var nodeArgv = process.argv;
var action = process.argv[2];

var title = "";





switch (action) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        if (title) {
            spotifySong(title)
        } else {
            spotifySong("The Sign")
        };
        break;

    case "movie-this":
        if (title) {
            movieThis(title)
        } else {
            movieThis("Mr Nobody")
        };
        break;

    case "do-what-it-says":
        doIt();
        break;
}


function tweets() {
    var params = { screen_name: "JohnDenver600" };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
};


function spotifySong(title) {
    spotify.search({ type: "track" , query: title }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        } else{
            
        }

        console.log(data);
    });
};


function movieThis(){

};


function doIt() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        var text = data.split(", ")
    })
};
