let newsArticles = [];
let menus = document.querySelectorAll(".main_buttons button");

menus.forEach((item) => {
  item.addEventListener("click", (event) => {
    getNewsByTopic(event)
  })
})

const getLatestNews = async () => {
  let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);
  let header = new Headers({
    'x-api-key': 'UdwQsPDZDWoKpyITsqOqxQU9HzZqtsfadf3SA24oVpE'
  });
  let response = await fetch(url, {
    headers: header
  }); // ajax, http, fetch 등을 이용할 수도 있다. 강의에서는 fetch 추천.
  let data = await response.json(); // data 또한 await을 해주어야 한다. 상위에서 await 해서 받아오는 response의 data를 가져오는 것이기 때문이다.
  newsArticles = data.articles;
  console.log(newsArticles);
  render();
};

const render = () => {
  let newsArticlesHTML = "";
  newsArticlesHTML = newsArticles.map((item) => {
    return `<div class="row py-4">
 <div class="col-lg-4">
   <img class="news_img"
     src="${item.media || "./images/no-image.png"}" onerror="this.src='./images/no-image.png';"/>
 </div>
 <div class="col-lg-8 position-relative">
   <h2 class="pt-3 fw-bold">${item.title}</h2>
   <p class="py-2">${
     item.summary == null || item.summary == ""
     ? "내용 없음"
     : item.summary.length < 200
     ? "본문을 보려면 클릭하십시오"
     : item.summary.length > 200
     ? item.summary.substring(0,200) + "..."
     : item.summary}</p>
   <div>${item.clean_url || "no source"} // ${moment(item.published_date).fromNow()}</div>
 </div>
</div>`;
  }).join('');
  document.getElementById("news_articles").innerHTML = newsArticlesHTML;
};

getLatestNews();

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase()
  let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`)
  let header = new Headers({
    'x-api-key': 'UdwQsPDZDWoKpyITsqOqxQU9HzZqtsfadf3SA24oVpE'
  });
  let response = await fetch(url, {
    headers: header
  });
  let data = await response.json();
  newsArticles = data.articles;
  console.log(newsArticles);
  render();
}

let searchButton = document.getElementById("search_button");
let searchInput = document.getElementById("search_input");

const getNewsByKeyword = async () => {
  let keyword = document.getElementById("search_input").value;
  let url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`);
  let header = new Headers({
    'x-api-key': 'UdwQsPDZDWoKpyITsqOqxQU9HzZqtsfadf3SA24oVpE'
  });
  let response = await fetch(url, {
    headers: header
  });
  let data = await response.json();
  newsArticles = data.articles;
  console.log(newsArticles);
  render();
}

searchButton.addEventListener("click", getNewsByKeyword);
searchInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getNewsByKeyword()
  }
});

// let eachNews = document.querySelectorAll(".row")
// console.log(eachNews)
// 뉴스들의 div를 클릭하면, 해당 기사의 링크로 연결되며 새창이 팝업되는 기능을 구현하고 싶은데.. 아직은 방법을 모르겠다