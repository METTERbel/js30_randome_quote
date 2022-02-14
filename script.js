const url = 'https://type.fit/api/quotes';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  const randIndex = Math.floor(Math.random() * data.length);
  const randText = (data[randIndex].text);
  const randAuthor = (data[randIndex].author);

  function showData(data) {
    let textHtml = document.getElementById('h1');
    textHtml.innerHTML = randText;
    let textAuthot = document.getElementById('h2');
    textAuthot.innerHTML = randAuthor;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  showData();
}
getData();