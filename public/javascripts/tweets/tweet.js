window.addEventListener("DOMContentLoaded", () => {
  bindTweet();
});

const bindTweet = () => {
  const elements = document.querySelectorAll(".fa-minus-circle");
  const tweetContainer = document.querySelector("#tweet-list-container");

  elements.forEach((elem) => {
    elem.addEventListener("click", async (e) => {
      const tweetId = e.target.getAttribute("tweetid");
      axios
        .delete(`/tweets/${tweetId}`)
        .then((response) => {
          tweetContainer.innerHTML = response.data;
          bindTweet();
        })
        .catch((err) => console.log(err));
    });
  });
};
