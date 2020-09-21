let initialLoad = true;
let count = 5;
const apiKey = 'demo123';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const container = document.querySelector('.column');
const loading = document.querySelector('.loading');
let loadImagesCompleted;

// helper function
function setAttrs(ele, attrs) {
  for (const key in attrs) {
    ele.setAttribute(key, attrs[key]);
  }
}

function displayPhotos(dataArr) {
  dataArr.map((data) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('a');
    const img = document.createElement('img');
    card.setAttribute('class', 'card');
    // cardImage.setAttribute('class', 'card-image');
    // cardImage.setAttribute('href', data.links.html);
    // cardImage.setAttribute('target', '_blank');
    setAttrs(cardImage, {
      class: 'card-image',
      href: data.links.html,
      target: '_blank',
    });
    // img.setAttribute('src', data.urls.regular);
    // img.setAttribute('alt', data.alt_description);
    // img.setAttribute('title', data.alt_description);
    setAttrs(img, {
      src: data.urls.regular,
      alt: data.alt_description,
      title: data.alt_description,
    });
    cardImage.appendChild(img);
    card.appendChild(cardImage);
    container.appendChild(card);
  });
  loading.classList.remove('is--show');
  loadImagesCompleted = true;
  console.log(`loadImagesCompleted`);
}

function detectFetch() {
  // console.log(`innerHeight: ${window.innerHeight}`);
  // console.log(`scrollY: ${window.scrollY}`);
  // console.log(`offsetHeight: ${document.body.offsetHeight}`);
  // console.log(`---------------`);
  if (
    window.scrollY > document.body.offsetHeight - 1000 &&
    loadImagesCompleted &&
    !initialLoad
  ) {
    console.log(apiUrl);
    getPhotos();
    count = 20;
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
}

async function getPhotos() {
  loading.classList.add('is--show');
  loadImagesCompleted = false;
  initialLoad = false;
  await fetch(apiUrl, {
    headers: {
      'Accept-Version': 'v1',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((dataArr) => {
      displayPhotos(dataArr);
    });
}

getPhotos();

window.addEventListener('scroll', detectFetch);
