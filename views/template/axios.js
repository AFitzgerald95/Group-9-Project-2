let params = document.getElementById('paramsInput');
let search = document.getElementById('searchInput');
let searchBtn = document.getElementById("searchBtn");
let paramsBtn = document.getElementById("paramsBtn");

const bookURL = () => {
    const bookKey = "AIzaSyCWP2wkkvDpkqCGnXd_GS6WWc-tI6DKZtM"
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}=all&key=${bookKey}`)
    .then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    });
}

const videoURL = () => {
    const videoKey = "ohYP4vnMNvPPW1O0egOBVQfqKwvQqDOTKITGb4cI"
    axios.get(`https://api.watchmode.com/v1/search/?apiKey=${videoKey}&search_field=name&search_value=${params}`)
    .then( response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
}

// const sendURL = () => {
//     axios.get('https://reqres.in/api/register', {
//         email: 'eve.holt@reqres.in',
//         // password: 'pistol'
//     }).then(response => {
//         console.log(response);
//     }).catch(err => {
//         console.log(err, err.response);
//     })
// }
searchBtn.addEventListener('click', bookURL);
paramsBtn.addEventListener('click', videoURL);