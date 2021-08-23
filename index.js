async function getUsers() {
  const data = await fetch(
    `https://611f263e9771bf001785c72a.mockapi.io/users`,
    { method: "GET" }
  );
  const users = await data.json();
  users.forEach((user) => createUser(user));
}

// fetch('https://611f263e9771bf001785c72a.mockapi.io/users')
//   .then((data) => data.json())
//   .then((users) => users.forEach((user) => createUser(user)));

function createUser({ name, avatar, createdAt, id }) {
  const info = document.createElement("div");
  info.setAttribute("class", "user-group");

  info.innerHTML = ` <div class ="user">
<img src=${avatar} >
<div>
<h4>${name}</h4>
<b>Join Date :</b>${new Date(createdAt).toDateString()}
<div>
<button  onclick="deleteUser(${id})" >Delete</button>
<button  onclick="addUser()" >Edit</button>

</div>


</div>
</div>
`;
  document.body.append(info);
}

getUsers();

async function deleteUser(id) {
  const data = await fetch(
    `https://611f263e9771bf001785c72a.mockapi.io/users/${id}`,
    { method: "DELETE" }
  );
  const user = await data.json();
}
let user_name = 0;
let user_pic = 0;

function add_username(event) {
  user_name = event.target.value;
  console.log(user_name);
}

function add_avatar(event) {
  user_pic = event.target.value;
  console.log(`"${user_pic}"`);
}

function addUser() {
  fetch("https://611f26339771bf001785c726.mockapi.io/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user_name,
      avatar: user_pic,
      createdAt: new Date(data.createdAt).toDateString(),
    }),
  })
    .then((data) => data.json())
    .then((user) => console.log(user));
}
