let params = document.getElementById('paramsInput');
let search = document.getElementById('searchInput');
let searchBtn = document.getElementById("searchBtn");
let paramsBtn = document.getElementById("paramsBtn");

const bookURL = () => {
    const bookKey = "AIzaSyCWP2wkkvDpkqCGnXd_GS6WWc-tI6DKZtM";
    let poster = "";
    let descript = "";
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}=all&key=${bookKey}`)
        .then(response => {
            console.log(response)
            const bookID = response.data[0].id
            poster += data.poster;
            descript += data.plot_overview
        })
        .catch(err => {
            console.log(err)
        })
}

const videoURL = () => {
    const videoKey = "ohYP4vnMNvPPW1O0egOBVQfqKwvQqDOTKITGb4cI";
    let poster = "";
    let descript = "";
    axios.get(`https://api.watchmode.com/v1/search/?apiKey=${videoKey}&search_field=name&search_value=${params}`)
        .then(response => {
            console.log(response)
            const itemID = response.data[0].id
            axios.get(`https://api.watchmode.com/v1/title/${itemID}/details/?apiKey=${videoKey}&append_to_response=sources`)
                .then(data => {
                    poster += data.poster
                    descript += data.plot_overview
                }).catch(err => {
                    console.log(err)
                })
        })
}

searchBtn.addEventListener('click', bookURL);
paramsBtn.addEventListener('click', videoURL);