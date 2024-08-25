console.log("Welcome to Spotify");
let SongIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay')
let MyProgressBar=document.getElementById('SongBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('SongItem'));

let Songs=[
    {SongName:"It's Always Blue", filepath:"1.mp3", coverPath:"1.jpg"},
    {SongName:"Trap CARTEL", filepath:"2.mp3", coverPath:"2.jpg"},
    {SongName:"They Mad", filepath:"3.mp3", coverPath:"3.jpg"},
    {SongName:"Rich The Kid", filepath:"4.mp3", coverPath:"4.jpg"},
    {SongName:"Alone", filepath:"5.mp3", coverPath:"5.jpg"},
    {SongName:"The Safety Dance", filepath:"6.mp3", coverPath:"6.jpg"},
    {SongName:"Back It Up", filepath:"7.mp3", coverPath:"7.jpg"},
    {SongName:"West Coast", filepath:"8.mp3", coverPath:"8.jpg"},
    {SongName:"Photograph", filepath:"9.mp3", coverPath:"9.jpg"},
    {SongName:"True Love", filepath:"10.mp3", coverPath:"10.jpg"},
]

songItem.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=Songs[i].coverPath;
    element.getElementsByClassName('SongName')[0].innerText=Songs[i].SongName;

});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    MyProgressBar.value=progress;
})

MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(MyProgressBar.value*audioElement.duration)/100;
})

//audioElement.play();

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('SongItemClass')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })

}


Array.from(document.getElementsByClassName('SongItemClass')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        const ClickedSongIndex =parseInt(e.target.id);
        if(SongIndex== ClickedSongIndex && !audioElement.paused){
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }

        else{
            makeAllPlay();
            SongIndex=parseInt(e.target.id)
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            audioElement.src=`${SongIndex+1}.mp3`;
            masterSongName.innerHTML=Songs[SongIndex].SongName
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
        }
       

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=9){
        SongIndex=0;
    }
    else{
        SongIndex+=1;
    }
    audioElement.src=`${SongIndex+1}.mp3`;
    masterSongName.innerHTML=Songs[SongIndex].SongName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=0){
        SongIndex=0;
    }
    else{
        SongIndex-=1;
    }
    audioElement.src=`${SongIndex+1}.mp3`;
    masterSongName.innerHTML=Songs[SongIndex].SongName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})