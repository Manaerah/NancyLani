//1.Promise
// A.
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
 
// B.
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  
  messages();

// 2. Fetch
// A.
function ambilDataUser() {
    // B.
    fetch("https://reqres.in/api/users")
    // C.
      .then((response) => {
        return response.json();
    })
    //  D.
    .then((users) => {
        users.data.forEach(user => {
            console.log(user.email);
        });
    })
//  E.
  ambilDataUser(); }

//3. Async Await
async function ambilDataUser() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const users = await response.json();
        users.data.forEach(user => {
            console.log(user.email);
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

ambilDataUser();


// 4.Axios
const axios = require('axios');

async function ambilDataUser() { 
    try {
        const response = await axios.get("https://reqres.in/api/users");
        const users = response.data;
        users.data.forEach(user => {
            console.log(user.email);
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

ambilDataUser();
  
  


  