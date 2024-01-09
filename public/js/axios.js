let searchBtn = document.getElementById("searchBtn");
let paramsBtn = document.getElementById("paramsBtn");


const bookURL = () => {
    let search = document.getElementById('searchInput').value;
    const bookKey = "AIzaSyCWP2wkkvDpkqCGnXd_GS6WWc-tI6DKZtM";
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}=all&key=${bookKey}`)
    .then(response => {
        const cardsEl = document.querySelector('.bookContainer');
        
        for(i = 0; i <= Math.min(response.data.items.length, 5); i++){
            var book = response.data.items[i]
            console.log(book);

            const newCardEl = document.createElement('div');
            newCardEl.classList.add('bookCard');

            const bookImgUrl = book.volumeInfo.imageLinks.smallThumbnail
            if (bookImgUrl) {
            const bookImgEl = document.createElement('img');
            bookImgEl.classList.add('image');
            bookImgEl.src = bookImgUrl;
            newCardEl.appendChild(bookImgEl);
            }
            
            const bookName = book.volumeInfo.title
            if (bookName) {
            console.log(bookName);
            var nameEl = document.createElement('h4');
            nameEl.classList.add('bookName')
            nameEl.textContent = bookName;
            newCardEl.appendChild(nameEl);
            }

            const bookDescription = book.searchInfo.textSnippet;
            if (bookDescription) {
                const descriptionEl = document.createElement('p');
                descriptionEl.classList.add('description')
                descriptionEl.textContent = bookDescription;
                newCardEl.appendChild(descriptionEl);
            }
            
            const bookLink = book.volumeInfo.canonicalVolumeLink
            if (bookLink) {
                const linkEl = document.createElement('button');
                linkEl.classList.add('link')
                if (cardsEl) {
                    cardsEl.appendChild(linkEl);
                    linkEl.addEventListener('click', () => 
                    window.location.href = bookLink
                    )
                }
                
                newCardEl.appendChild(linkEl);
                linkEl.textContent = 'Link For Book';
            }
            cardsEl.appendChild(newCardEl)
        }
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    const videoURL = () => {
        const videoKey = "kAkSWPYcQeHHMrCJU5ONXuwRIH85vNjxsRjumdtX";
        let params = document.getElementById('paramsInput').value;
        axios.get(`https://api.watchmode.com/v1/search/?apiKey=${videoKey}&search_field=name&search_value=${params}`)
            .then(async response => {
                var videoResults = response.data.title_results;
                for(var i = 0; i<videoResults.length; i++){
                    await axios.get(`https://api.watchmode.com/v1/title/${videoResults[i].id}/details/?apiKey=${videoKey}&append_to_response=sources`)
                    .then(data => {
                        const videoEl = document.querySelector('.videoContainer');
    
                        var video = data;
                        console.log(video);

                        const videoCardEl = document.createElement('div');
                        videoCardEl.classList.add('videoCard');

                        const videoImg = video.data.poster;
                        if (videoImg) {
                            const videoImgEl = document.createElement('img');
                            videoImgEl.classList.add('image');
                            videoImgEl.src = videoImg;
                            videoCardEl.appendChild(videoImgEl);
                        }

                        const videoName = video.data.original_title;
                        if (videoName) {
                            const videoNameEl = document.createElement('h4');
                            videoNameEl.classList.add('videoName');
                            videoNameEl.textContent = videoName;
                            videoCardEl.appendChild(videoNameEl);
                        }

                        const videoDescrition = video.data.plot_overview;
                        if (videoDescrition) {
                            const videoDescritionEl = document.createElement('p');
                            videoDescritionEl.classList.add('description');
                            videoDescritionEl.textContent = videoDescrition;
                            videoCardEl.appendChild(videoDescritionEl);
                        }

                        const videoTrailer = video.data.trailer;
                        if (videoTrailer) {
                            const videoTrailerEl = document.createElement('button');
                            videoTrailerEl.classList.add('link');
                            if (videoEl) {
                                videoEl.appendChild(videoTrailerEl);
                                videoTrailerEl.addEventListener('click', () =>
                                window.location.href = videoTrailer
                            )
                            } 
                            videoCardEl.appendChild(videoTrailerEl);
                            videoTrailerEl.textContent = 'Watch Trailer';
                        }

                        videoEl.appendChild(videoCardEl);
                    }).catch(err => {
                        console.log(err)
                    })}
            })
    }

searchBtn.addEventListener('click', bookURL);
paramsBtn.addEventListener('click', videoURL);