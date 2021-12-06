// URL for channels, does not have the viewer_count data object
const url = 'https://api.twitch.tv/helix/search/channels?query=';


function getValue() {
  var inputValue = document.getElementById("search_name").value;

  fetch(url+inputValue, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + 's8fajy051281ogcuh3mk0g5vd7us35',
      'Client-ID': '07xwpke3y03hkw8tgaeraealm3dj6k',
    },
  }).then((response) => {
      if (response.ok) {
        return response.json();
    } else {
      throw new Error("Network Response Error");
    }
  })
  .then(data => {
    console.log(data);
    displayResults(data)
  })
  .catch((error) => console.error("Fetch Error:", error));
}

function displayResults(data) {

  const individual_results = data.data;

  document.getElementById('individual_results').innerHTML = individual_results.map(query => 
    `<div>
      <div class="left_individual_results"><img src="${query.thumbnail_url}" height="100px"></div>
      <div class="right_individual_results">
        <a href="https://www.twitch.tv/${query.display_name}">${query.display_name}</a>
        <div>${query.game_name}</div>
        <div>${query.viewer_count} + viewers</div>
        <div>${query.title}</div>
      </div>
    </div>`
  );
}

function backwardPagination() {
  alert('Pagination not supported by the new twitch API!');
};

function forwardPagination() {
  alert('Pagination not supported by the new twitch API!');
};