let newsArticles = [];
let menus = document.querySelectorAll(".main_buttons button");
let side_menus = document.querySelectorAll(".sidebar .close_sidebar_topic");
let url;
let page = 1;
let totalPage = 1;

menus.forEach((item) => {
  item.addEventListener("click", (event) => {
    getNewsByTopic(event)
  })
})

side_menus.forEach((item) => {
  item.addEventListener("click", (event) => {
    getNewsByTopic(event)
  })
})

const getNews = async () => {
  try {
    let header = new Headers({
      'x-api-key': 'kl0euFZzeBHlrFObSwlLBw2sEcnW022jeNnLpBlMNwk'
    });

    url.searchParams.set('page', page);

    let response = await fetch(url, {
      headers: header
    });

    let data = await response.json();

    if (response.status == 200) {
      if (data.total_hits == 0) {
        throw new Error("No Matches For Your Search")
      }
    } else {
      throw new Error("Page Error")
    }
    console.log(data)
    newsArticles = data.articles;
    console.log(newsArticles)
    page = data.page;
    totalPage = data.total_pages;
    render();
    pagination();
  } catch (error) {
    errorRender(error.message);
  }
}

const errorRender = (message) => {
  let errorHTML = `<div class="alert alert-danger fw-bold text-center fs-2" role="alert">
  ${message}
  </div>`
  document.getElementById("news_articles").innerHTML = errorHTML;
}

const getLatestNews = async () => {
  url = new URL(`
      https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);
  getNews()
};

const render = () => {
  let newsArticlesHTML = "";
  newsArticlesHTML = newsArticles.map((item) => {
    return `
    <div class="row py-4" onclick="location.href='${item.link}'">
      <div class="col-lg-4">
        <img class="news_img" src="${item.media || "./images/no-image.png"}" onerror="this.src='./images/no-image.png';"/>
      </div> 
        <div class = "col-lg-8 position-relative" >
          <h2 class="pt-3 fw-bold">${item.title}</h2>
            <p class="py-2">
            ${item.summary == null || item.summary == ""
              ? "내용 없음"
              : item.summary.length < 200
              ? "본문을 보려면 클릭하십시오"
              : item.summary.length > 200
              ? item.summary.substring(0,200) + "..."
              : item.summary}
            </p>
              <div>
                ${item.clean_url || "no source"} // ${moment(item.published_date).fromNow()}
              </div>
        </div>
    </div>`;
  }).join('');
  document.getElementById("news_articles").innerHTML = newsArticlesHTML;
};

getLatestNews();

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase()
  url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`)
  getNews()
}

let searchButton = document.getElementById("search_button");
let searchInput = document.getElementById("search_input");

const getNewsByKeyword = async () => {
  let keyword = document.getElementById("search_input").value;
  url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`);
  getNews()
  searchInput.value = "";
}

searchButton.addEventListener("click", getNewsByKeyword);
searchInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getNewsByKeyword()
  }
});

const pagination = () => {
  let paginationHTML = ``
  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  if (last > totalPage) {
    last = totalPage;
  }
  let first = last - 4 <= 0 ? 1 : last - 4;

  if (first >= 6) {
    paginationHTML = `<li class="page-item" onclick="moveToPage(1)">
                        <a class="page-link" href='#js-bottom'>&lt;&lt;</a>
                      </li>
                      <li class="page-item" onclick="moveToPage(${page - 1})">
                        <a class="page-link" href='#js-bottom'>&lt;</a>
                      </li>`;
  }
  for (let i = first; i <= last; i++) {
    paginationHTML += `<li class="page-item ${i == page ? "active" : ""}" >
                        <a class="page-link" href='#js-bottom' onclick="moveToPage(${i})" >${i}</a>
                       </li>`;
  }
  if (last < totalPage) {
    paginationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})">
                        <a  class="page-link" href='#js-program-detail-bottom'>&gt;</a>
                       </li>
                       <li class="page-item" onclick="moveToPage(${totalPage})">
                        <a class="page-link" href='#js-bottom'>&gt;&gt;</a>
                       </li>`;
  }
  document.querySelector(".pagination").innerHTML = paginationHTML;
}

const moveToPage = (pageNum) => {
  page = pageNum;
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  getNews();
}