let up = document.querySelector(".index_video");
let down = document.querySelector(".index_content");
let video = document.querySelector(".video");
let dear = document.querySelector(".content_dear");
let personName = document.querySelector(".content_name");
let wish = document.querySelector(".content_wish");
let happy = document.querySelector(".index_happy");

up.addEventListener("animationend", (e) => {
  if (e.animationName === "up_animation") {
    down.classList.add("down_animation");
  }
});
down.addEventListener("animationend", (e) => {
  video.classList.add("fade_animation");
});
video.addEventListener("animationend", (e) => {
  dear.classList.add("fade_animation");
});
dear.addEventListener("animationend", (e) => {
  personName.classList.add("fade_animation");
});
personName.addEventListener("animationend", (e) => {
  wish.classList.add("wish_animation");
});
wish.addEventListener("animationend", (e) => {
  happy.classList.add("happy_animation");
});
