const getData = async () => {
  const response = await fetch(
    "https://api.github.com/users"
  );
  const data = await response.json();
  console.log(data);
  var cardRow = document.getElementById("cardRow");
  for (const element of data) {
    cardRow.innerHTML += `
        <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
            <img
                src="${element.avatar_url}"
                alt=""
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                id="image"
                width="150"
            />
            <h5 class="mb-3" id="title">${element.login}</h5>
            <a href="${element.html_url}" class="text-capitalize btn btn-outline-secondary" id="link">View Profile</a>
            </div>
    </div>
    `;
  }
  getPosts();
};

const getPosts = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  var cardRow2 = document.getElementById("cardRow2");
  for (const element of data) {
    cardRow2.innerHTML += `
          <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
              <h5 class="mb-0" id="title">${element.title}</h5>
              <span class="small text-uppercase text-muted" id="desgn">${element.body}</span>
              </div>
      </div>
      `;
  }
};

window.onload = getData;
