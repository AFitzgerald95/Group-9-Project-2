let searchBtn = document.getElementById("searchBtn");
let paramsBtn = document.getElementById("paramsBtn");


const bookURL = () => {
    let search = document.getElementById('searchInput').value;
    const bookKey = "AIzaSyCWP2wkkvDpkqCGnXd_GS6WWc-tI6DKZtM";
    let poster = "";
    let descript = "";
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}=all&key=${bookKey}`)
        .then(response => {
            var book = response.data.items[0]
            console.log(response.data.items)
            const bookID = book.id
            poster += book.volumeInfo.imageLinks.thumbnail;
            descript += book.volumeInfo.description;
        })

}

const videoURL = () => {
    const videoKey = "ohYP4vnMNvPPW1O0egOBVQfqKwvQqDOTKITGb4cI";
    let params = document.getElementById('paramsInput').value;
    let poster = "";
    let descript = "";
    let genres = " ";
    const OT = "";
    const title = "";
    const OL = "";
    let us_rating = "";
    axios.get(`https://api.watchmode.com/v1/search/?apiKey=${videoKey}&search_field=name&search_value=${params}`)
        .then(async response => {
            var videoResults = response.data.title_results;
            for(var i = 0; i<videoResults.length; i++){
                await axios.get(`https://api.watchmode.com/v1/title/${videoResults[i].id}/details/?apiKey=${videoKey}&append_to_response=sources`)
                .then(data => {
                    console.log(data)
                    poster += data.poster
                    descript += data.plot_overview
                }).catch(err => {
                    console.log(err)
                })}
        })
}

searchBtn.addEventListener('click', bookURL);
paramsBtn.addEventListener('click', videoURL);