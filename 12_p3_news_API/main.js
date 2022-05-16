const getLatestNews = async () => {
  let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10');

  let header = new Headers({
    'x-api-key': 'UdwQsPDZDWoKpyITsqOqxQU9HzZqtsfadf3SA24oVpE'
  });

  let response = await fetch(url, {
    headers: header
  }) // ajax, http, fetch 등을 이용할 수도 있다. 강의에서는 fetch 추천.

  let data = await response.json() // data 또한 await을 해주어야 한다. 상위에서 await 해서 받아오는 response의 data를 가져오는 것이기 때문이다.
};


getLatestNews();