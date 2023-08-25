console.log("Welcome to Bajao");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Heartless (feat. Astha Gill)", filePath: "songs/1.mp3", coverPath: "https://c.saavncdn.com/013/Heartless-MTV-Unwind--Hindi-2022-20211216105803-500x500.jpg"},
    {songName: "Pachtaoge(From 'Jaani Ve')", filePath: "songs/2.mp3", coverPath: "https://wallpapercave.com/wp/wp6150686.jpg"},
    {songName: "Wo Chand Kaha Se Laogi", filePath: "songs/3.mp3", coverPath: "https://m.timesofindia.com/photo/79422921/size-205684/79422921.jpg"},
    {songName: "Bekhayali(From 'Kabir Singh')", filePath: "songs/4.mp3", coverPath: "https://i.ytimg.com/vi/6u3bLGOyRZw/maxresdefault.jpg"},
    {songName: "Yad Piya Ai Aane Lagi", filePath: "songs/5.mp3", coverPath: "https://www.koimoi.com/wp-content/new-galleries/2019/11/divya-khosla-kumars-yaad-piya-ki-aane-lagi-unstoppable-0001.jpg"},
    {songName: "Judaai(From 'Badlapur')", filePath: "songs/6.mp3", coverPath: "https://img.wynk.in/unsafe/320x180/top/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_orchard/music/20220218054640_0828970040020/1645182615/srch_orchard_0828970040020_GBSGZ1400274.jpg"},
    {songName: "Bhula Dunga", filePath: "songs/7.mp3", coverPath: "https://www.thestatesman.com/wp-content/uploads/2020/03/ik-1.jpg"},
    {songName: "Mere Rashke Qamar", filePath: "songs/8.mp3", coverPath: "https://e1.pxfuel.com/desktop-wallpaper/210/942/desktop-wallpaper-mere-rashke-qamar.jpg"},
    {songName: "Piya Aaye Na", filePath: "songs/9.mp3", coverPath: "https://i1.sndcdn.com/artworks-000057334120-4n3hyz-t500x500.jpg"},
    {songName: "Ijazat(From 'One Night Stand')", filePath: "songs/10.mp3", coverPath: "https://c.saavncdn.com/239/One-Night-Stand-Hindi-2016-500x500.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})