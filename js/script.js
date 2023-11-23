function blogButton() {
  document.location.href = 'blog.html';
}


const handleButton = async() =>{
  const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();
  console.log(data);
  const buttonsContainer = document.getElementById('buttons-container');

  const categoryData = data.data;
  categoryData.forEach((category) =>{
    const createButtons = document.createElement('button');
    createButtons.innerHTML = `
    <a onclick = "handleButton('${category.category_id}')" role="tab" class="tab">${category.category}</a>
    `;
    buttonsContainer.appendChild(createButtons);
  })
  
}

const loadVideos = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
  const data = await res.json();
  const videos = data.data;
  // console.log(videos);
  displayCardVideos(videos);
}

const displayCardVideos = cardVideos => {
  // console.log(cardVideos);

  const videosCardContainer = document.getElementById('videos-card-container')
  cardVideos.forEach(videoCard => {
    console.log(videoCard);

    const videoCards = document.createElement('div');
    videoCards.classList = `card p-5 bg-gray-100 shadow-xl `;
    videoCards.innerHTML = `
        <figure><img src="${videoCard.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
        <div class="flex gap-3">
        <img class="rounded-full w-10 h-10" src="${videoCard.authors[0].profile_picture}"/>
        <div>
        <h2 class="card-title">${videoCard.title}</h2>
        </div>
        </div>
          <div class="ml-12">
          <p>${videoCard.authors[0].profile_name}</p>
          <p> ${videoCard.authors[0]?.verified}</p>
          <p>${videoCard.others.views}</p>
          </div>
        </div>
        `;
    videosCardContainer.appendChild(videoCards);
  })
}


loadVideos()
handleButton()