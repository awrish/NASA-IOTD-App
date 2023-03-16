const apiKey =  "Yrf09T9fD51i7pELjCJwgXG7gf4dON6QQl3euvuN";

/** API Key is read only, otherwise would hide it in a config.py and use git ignore to not upload that file to github,
 *  while replacing all instances of the api key with a variable stored in the config.py file */

const todaysDate = new Date().toISOString().slice(0, 10);

function updateImage() {

    var date;

    const dateControl = document.querySelector('input[type="date"]');
    date = dateControl.value;
    console.log(dateControl.value);

    var queryURLDate = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;

    fetch(queryURLDate)
    .then((response) => response.json())
    .then((data) => {

        document.querySelector('img').src = data.hdurl;

        var div = document.getElementById("explanation");
        var copy = document.getElementById("copyright");

        // clears field before adding in the new data
        document.getElementById("copyright").innerHTML = ""; 
        document.getElementById("explanation").innerHTML = "";
        
        div.innerHTML += data.explanation;

        
        /** Not all images have copyright information attatched, those who don't are from NASA and in the public domain */
        if(data.copyright != null) {
            copy.innerHTML += "Copyright information: " + data.copyright;
        } else {
            copy.innerHTML += "Copyright information: NASA";
        }
        
 
    })
    .catch(function(error) {
        console.log(error);
    });

}

/** Sets up the calendar to have today's date, runs into an issue where it will change the date a few hours too soon */
function setup() {
    var today = new Date().toISOString().split('T')[0];
    document.querySelector('input[type="date"]').setAttribute('max', today);
    document.querySelector('input[type="date"').setAttribute('value', today);
}


/**
 * Generates random images for the wallpaper page. Makes use of the count feature in the Open API.
 */
function randomGen() {

    var queryWallpaper = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&count=1";

    fetch(queryWallpaper)
    .then((response) => response.json() )
    .then((data) => {
        //could replace data[0] with a variable 

        document.querySelector('img').src = data[0].hdurl;
        
        // clears field before adding in the new data
        document.getElementById("copyright").innerHTML = ""; 

        var copy = document.getElementById("copyright");


        /** Not all images have copyright information attatched, those who don't are from NASA and in the public domain */
        if(data[0].copyright != null) {
            copy.innerHTML += "Copyright information: " + data[0].copyright;
        } else {
            copy.innerHTML += "Copyright information: NASA";
        }
        
    })
    .catch(function(error) {
        console.log(error);
    });

}
