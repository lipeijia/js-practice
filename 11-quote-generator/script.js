const avatarImg = document.querySelector('img');
const quoteText = document.querySelector("h1");
const getQuoteBtn = document.querySelector('#get-quote');
const authorText = document.querySelector("#author-text");
const twitterBtn = document.querySelector('#twitter');
const spinner = document.querySelector('.spinner');
const containerBody = document.querySelector('.body');

const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
// Show loading
function loadding() {
    spinner.hidden = false;
    containerBody.hidden = true;
    avatarImg.hidden = true;
}

// hide loading show content
function complete() {
    spinner.hidden = true;
    containerBody.hidden = false;
    avatarImg.hidden = false;
}

// Random Avatar from API
async function getAvatar() {
    loadding();
   await fetch(`https://randomuser.me/api/`, {
     credentials: "same-origin",
   })
     .then((response) => {
       if (response.ok) {
         return response.json();
       }
       throw new Error("Network response was not ok.");
     })
     .then((data) =>
       avatarImg.setAttribute("src", data.results[0].picture.large)
     )
     .catch((err) => getAvatar(err));
     complete();
    
};


// get Quote from API
async function getQuote() {
    
    const quoteUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
    try {
        const response = await fetch(proxyUrl + quoteUrl);
        const data = await response.json();
        if (!authorText)  {
            authorText.textContent = 'unknown';
        } else {
            authorText.textContent = `- ${data.quoteAuthor}`;
        }
        quoteText.textContent = data.quoteText;
        getAvatar();
    } catch(err) {
        getQuote();
        console.log('whoops, no quote!', err);
    }
};

getQuote();


function tweetQuote() {
    const quote = quoteText.textContent;
    const author = authorText.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
    window.open(twitterUrl, '_blank');
}

getQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);