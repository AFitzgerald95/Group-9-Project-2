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
            console.log('testtest')
        });
    }

searchBtn.addEventListener('click', bookURL);
