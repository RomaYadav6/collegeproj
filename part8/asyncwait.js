function fetchcommentdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment data");
    }, 3000);
  });
}

function fetchblogdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("blog data");
    }, 3000);
  });
}

async function getblogdata() {
  try {
    console.log("fetching blog data");
    const blogdata = await fetchblogdata(); // Fetching the blog data
    const commentdata = await fetchcommentdata(); // Fetching the comment data
    console.log(blogdata); // Log blog data
    console.log(commentdata); // Log comment data
  } catch (error) {
    console.error(error); // Handle any errors that might occur
  }
}

// Call the function to fetch and log the data
getblogdata();
