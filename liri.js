require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var spotify2 = require("spotify");
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
