// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//       resolve("Data fetched successfully!");
//     } else {
//       reject("Error fetching data");
//     }
//   });
// }

// fetchData()
//   .then((responce) => {
//     console.log(responce);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     response.json();
//   })
//   .then((json1) => console.log(json1));

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
