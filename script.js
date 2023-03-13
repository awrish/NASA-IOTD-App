const apiKey =  "Yrf09T9fD51i7pELjCJwgXG7gf4dON6QQl3euvuN";

const todaysDate = new Date().toISOString().slice(0, 10);

//const dateControl = document.querySelector('input[type="date"]');


/** 
let image = {
    "apiKey": "Yrf09T9fD51i7pELjCJwgXG7gf4dON6QQl3euvuN",
    fetchImage: function() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=" + this.apiKey + "&date=" + date)
    }
}

*/

function updateImage() {

    var date;

    const dateControl = document.querySelector('input[type="date"]');
    date = dateControl.value;
    console.log(dateControl.value);

    var queryURLDate = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;

    //console.log(queryURLDate);

    fetch(queryURLDate)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.url);
        document.querySelector('img').src = data.hdurl;

        var div = document.getElementById("explanation");
        div.innerHTML += data.explanation;
    })
    .catch(function(error) {
        console.log(error);
    });

}

function test() {
    var today = new Date().toISOString().split('T')[0];
    document.querySelector('input[type="date"]').setAttribute('max', today);
    document.querySelector('input[type="date"').setAttribute('value', today);
}
