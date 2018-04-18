require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var fs = require("fs");

var nodeArgv = process.argv;
var action = process.argv[2];

var title = "";

for (let i = 3; i < nodeArgv.length; i++) {
    title = title + "" + nodeArgv[i];
}



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
            for (let i = 0; i < tweets.length; i++) {
                var date = tweets[i].created_at;
                console.log("@JohnDenver600: " + tweets[i].text + "Created at: " + date);
                console.log("----------------------");

                fs.appendFile("log.txt", '@JohnDenver600: ' + tweets[i].text + "Created at: " + date)
                // fs.appendFile("log.txt", '--------------------');
            }
        } else {
            console.log("An error occured. Tweet better content.");

        }
    });
};


function spotifySong() {
    spotify.search({ type: "track", query: title }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        } else {
            for( let i = 0; i<data.length; i ++){
                var songData = data.tracks.items[1];
                console.log();
                
            }

        }

        console.log(data.tracks.items);
    });
};


function movieThis() {

};


function doIt() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        var text = data.split(", ")
    })
};
