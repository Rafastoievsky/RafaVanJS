const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//canciones
const songs= [
    'WeightOfLove', 
    'InTime', 
    'TurnBlue', 
    'Fever', 
    'YearInReview', 
    'BulletInTheBrain'
];

let songIndex = 0;



//datos de cancion
const loadSong = (song)=>{
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `img/${song}.png`;
}

const playSong = ()=>{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

const pauseSong = ()=>{
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

//cancion anterior
const prevSong= ()=>{
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//cancion siguiente
const nextSong= ()=>{
    songIndex++;
    if (songIndex > songs.length -1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//actualizar barra de avance
const updateProgress=(e)=>{
    const {duration, currentTime} = e.srcElement;
    const porcentajeAvance = (currentTime/duration) *100;
    progress.style.width = `${porcentajeAvance}%`;    
}

const setProgress = (e)=>{
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

//Eventos

//Oasar datis de cancion al DOM
loadSong(songs[songIndex]);

playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

//cambiar de cancion
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//avance de canciones
audio.addEventListener('timeupdate', updateProgress);

//click en barra de avance
progressContainer.addEventListener('click', setProgress);

//termina cancion
audio.addEventListener('ended', nextSong);