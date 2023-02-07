//修改人名
let params = new URL(window.location.href).searchParams;
let guestQuery = params.get("guest");
changeName(guestQuery);

function changeName(params) {
  if (!!params) {
    //如果有人名才執行
    let guestName = jsondata.find((el) => {
      return params === el.query;
    });
    document.querySelector(".alertBox_name").innerHTML = guestName.name;
    document.querySelector(".content_name").innerHTML = guestName.name;
  }
}

//載入 youtube
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
// window.onYouTubeIframeAPIReady = loadVideo; // onYouTubeIframeAPIReady will load the video after the script is loaded
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "md1tqfsKPOM",
    playerVars: { controls: 0, loop: 1, fs: 0 },

    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(event) {
  event.target.mute();
}

//進場動態
let alertBox = document.querySelector(".alertBox");
let up = document.querySelector(".index_video");
let down = document.querySelector(".index_content");
let video = document.querySelector(".video");
let dear = document.querySelector(".content_dear");
let personName = document.querySelector(".content_name");
let wish = document.querySelector(".content_wish");
let happy = document.querySelector(".index_happy");

document.querySelector("#start").addEventListener("click", (e) => {
  alertBox.classList.remove("alertBox_in");
  up.classList.add("up_animation");
  player.unMute(); //關閉靜音
});

up.addEventListener("animationstart", (e) => {
  if (e.animationName === "up_animation") {
    down.classList.add("down_animation");
  }
});
down.addEventListener("animationend", (e) => {
  video.classList.add("fade_animation");
  player.playVideo(); //播放
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
