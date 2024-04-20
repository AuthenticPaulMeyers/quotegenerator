// Variables
const contentEl = document.querySelector('.content');
const newButtonEl = document.querySelector('.new-quote');
const authorEl = document.querySelector('.author');
const api_url = "https://api.quotable.io/random";

// fetch data from the external api
function loadQuote(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        contentEl.innerHTML = data.content;
        authorEl.innerHTML = data.author;
    });
}

loadQuote(api_url);

newButtonEl.addEventListener('click', () => {
    loadQuote(api_url);
});