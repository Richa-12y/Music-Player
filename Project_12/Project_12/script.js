let musicList = [
  {
    img: "https://www.lyricsbell.com/wp-content/uploads/2019/10/chidiya-vilen.jpg",
    song: "./music/Chidiya - Vilen.mp3",
    singerName: "Vilen",
  },
  {
    img: "https://a10.gaanacdn.com/images/albums/49/3828549/crop_480x480_3828549.jpg",
    song: "./music/At My Worst Song Download(SongsZilla.Net).mp3",
    singerName: "Pink Sweat",
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b2735b74e703d6ffb2ea16860c86",
    song: "./music/Excuses_1.mp3",
    singerName: "Ap Dhillon",
  },
  {
    img: "https://i.ytimg.com/vi/x3bfa3DZ8JM/maxresdefault.jpg",
    song: "./music/Khalid_Better_(thinkNews.com.ng).mp3",
    singerName: "Khalid",
  },
  {
    img: "https://lastfm.freetls.fastly.net/i/u/avatar170s/b96648009b15b805311505428d176441",
    song: "./music/NF_Songs_-_3_AM.mp3",
    singerName: "NF",
  },
  {
    img: "https://lastfm.freetls.fastly.net/i/u/avatar170s/b96648009b15b805311505428d176441",
    song: "./music/NF_Songs_-_If_You_Want_Love.mp3",
    singerName: "NF",
  },
  {
    img: "https://eminem.news/wp-content/uploads/2020/01/Love-The-Way-You-Lie-2020.jpg",
    song: "./music/Eminem_ft_Rihanna_-_Love_The_Way_You_Lie_(Jesusful.com).mp3",
    singerName: "Eminem Rihanna",
  },
  {
    img: "https://hindilyricsbox.com/wp-content/uploads/2020/02/Ek-Pyar-Ka-Nagma-Hai-Lyrics-Shor-Hindi-Lyrics.jpg",
    song: "./music/02. Ek Pyar Ka Nagma Hai.mp3",
    singerName: "Lata & Mukesh",
  },
];

let songNumber = parseInt(document.getElementById("play").value);
let audio = new Audio(musicList[songNumber].song);
// let audio = new Audio(songs[0].url);

let previousButton = document.querySelector(".previous");
let playButton = document.querySelector(".play");
let pauseButton = document.querySelector(".pause");
let nextButton = document.querySelector(".next");
let artist = document.querySelector(".artist");
let artistName = document.querySelector(".name");
let container = document.querySelector(".controls");
let imgChange = document.querySelector("#background-img");

let currentSongIndex = parseInt(previousButton.value);

const spin = () => {
  firstG.classList.add("spin");
  secondG.classList.add("spin");
};

playButton.addEventListener("click", function () {
  let x = setInterval(() => {
    // let valueTarget = document.getElementById("file").value;
    // let result = parseInt(valueTarget) + 1;
    document.getElementById("file").value = audio.currentTime;
    console.log("hello");

    console.log(audio.duration);
    console.log(audio.currentTime);
    document.getElementById("file").max = audio.duration;

    if (audio.duration === audio.currentTime) {
      console.log("hello inside");
      clearInterval(x);
    }
  }, 1000);
  audio.play();
  artist.innerHTML = currentSong().singerName;
  song.innerHTML = currentSong().song;
  imgChange.src = currentSong().img;
  spin();
  audio.loop = "true";
});

pauseButton.addEventListener("click", function () {
  audio.pause();
  firstG.classList.remove("spin");
  secondG.classList.remove("spin");
});

nextButton.addEventListener("click", function () {
  nextSong();

  spin();
});
const nextSong = () => {
  document.getElementById("file").value = 0;

  let x = setInterval(() => {
    // let valueTarget = document.getElementById("file").value;
    // let result = parseInt(valueTarget) + 1;

    document.getElementById("file").value = audio.currentTime;
    console.log("hello");

    console.log(audio.duration);
    console.log(audio.currentTime);
    document.getElementById("file").max = audio.duration;

    if (audio.duration === audio.currentTime) {
      console.log("hello inside");
      clearInterval(x);
    }
  }, 1000);

  let currentSongIndex = parseInt(previousButton.value);
  newSongIndex = currentSongIndex + 1;
  previousButton.value = newSongIndex;
  audio.pause();
  audio = new Audio(musicList[newSongIndex].song);
  audio.play();
  console.log("hello next");
  artistName.innerHTML = musicList[newSongIndex].singerName;
  let songName = musicList[newSongIndex].song.split("/");
  let songTitle = songName[songName.length - 1];
  artist.innerHTML = songTitle;
  imgChange.src = musicList[newSongIndex].img;
};
const previousSong = () => {
  document.getElementById("file").value = 0;

  let x = setInterval(() => {
    // let valueTarget = document.getElementById("file").value;
    // let result = parseInt(valueTarget) + 1;

    document.getElementById("file").value = audio.currentTime;
    console.log("hello");

    console.log(audio.duration);
    console.log(audio.currentTime);
    document.getElementById("file").max = audio.duration;

    if (audio.duration === audio.currentTime) {
      console.log("hello inside");
      clearInterval(x);
    }
  }, 1000);

  let currentSongIndex = parseInt(previousButton.value);
  newSongIndex = currentSongIndex - 1;
  previousButton.value = newSongIndex;
  audio.pause();
  audio = new Audio(musicList[newSongIndex].song);
  audio.play();
  console.log("hello next");
  artistName.innerHTML = musicList[newSongIndex].singerName;
  let songName = musicList[newSongIndex].song.split("/");
  let songTitle = songName[songName.length - 1];
  artist.innerHTML = songTitle;
  imgChange.src = musicList[newSongIndex].img;
};

previousButton.addEventListener("click", function () {
  previousSong();
  spin();
});
