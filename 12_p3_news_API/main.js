let newsArticles = [];

const getLatestNews = async () => {
  let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10');

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

getLatestNews();

const render = () => {
  let newsArticlesHTML = "";

  newsArticlesHTML = newsArticles.map((item) => {
    return `<div class="row py-4">
 <div class="col-lg-4">
   <img class="news_img_size"
     src=${item.media} />
 </div>
 <div class="col-lg-8">
   <h2>${item.title}</h2>
   <p>${
     item.summary == null || item.summary == ""
     ? "내용 없음"
     : item.summary.length < 200
     ? "본문을 보려면 클릭하십시오"
     : item.summary.length > 200
     ? item.summary.substring(0,200) + "..."
     : item.summary}</p>
   <div>${item.clean_url} // ${item.published_date}</div>
 </div>
</div>`;
  }).join('');

  document.getElementById("news_articles").innerHTML = newsArticlesHTML;
};