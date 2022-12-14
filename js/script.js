window.addEventListener('DOMContentLoaded', event => {
const modalController = ({popup, btnClose, time = 300}) => {
  const modalElem = document.querySelector(popup);
  const bodyModal = document.querySelector('body');
  bodyModal.style.overflow = 'hidden';
  setTimeout(() => {
    modalElem.style.cssText = `
    display: flex;
    visibility: visible;
    opacity: 1;
  `;
  }, time);

  const closeModal = event => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
      ) {
      
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);

      window.removeEventListener('keydown', closeModal);
      bodyModal.style.overflow = 'auto';
    }
  };
  modalElem.addEventListener('click', closeModal);
};


modalController({
  popup: '.popup2',
  btnClose: '.popup__close'
});


    const mainFunc = () => {
  const hideText = document.querySelector('.hide__text'),
  downArrow = document.querySelector('.down__arrow');
downArrow.addEventListener('click', () => {
  hideText.classList.toggle('show__text');
});
};
mainFunc();
const sliderOne = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
  });
}
sliderOne();
const smoothScroll = () => {
  const scrollLink = document.querySelectorAll('a[href^="#"]');
  scrollLink.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};
smoothScroll();
const congratsSlider = () => {
  const congratsSlide = document.querySelectorAll('.congrats-slide'),
    modalOne = document.querySelector('.modal__one'),
    modalSecond = document.querySelector('.modal__two'),
    modalThree = document.querySelector('.modal__three'),
    modalFour = document.querySelector('.modal__four');
  congratsSlide.forEach(element => {
    element.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('.congrats-slide-one')) {
        modalOne.classList.toggle('modal__show');
      }
      if (target.closest('.congrats-slide-two')) {
        modalSecond.classList.toggle('modal__show');
      }
      if (target.closest('.congrats-slide-three')) {
        modalThree.classList.toggle('modal__show');
      }
      if (target.closest('.congrats-slide-four')) {
        modalFour.classList.toggle('modal__show');
      }
    });
  });
};
congratsSlider();


const kishlakCont = document.querySelector('.kishlak__container'),
  kishlakArrow = document.querySelector('.kishlak__arrow');
kishlakArrow.addEventListener('click', () => {
    kishlakCont.classList.toggle('kishlak__show')
});
const callPhone = document.querySelector('.call__phone'),
    callPhoto = document.querySelector('.call__photo');
callPhone.addEventListener('click', () => {
    callPhoto.style.display = 'block';
});
function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');
    const timerDays = document.querySelector('#timer-days');
    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
      const seconds = Math.floor(timeRemaining % 60);
      const minutes = Math.floor((timeRemaining / 60) % 60);
      const hours = Math.floor(timeRemaining / 60 / 60) % 24;
      const day = Math.floor(timeRemaining / 60 / 60 / 24);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds,
        day
      };
    }
    function getZero(num) {
      if (num > 0 && num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    }
    function updateClock() {
      const timer = getTimeRemaining();
      if (timer.hours < 0 && timer.minutes < 0 && timer.seconds < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      } else {
        timerHours.textContent = getZero(timer.hours);
        timerMinutes.textContent = getZero(timer.minutes);
        timerSeconds.textContent = getZero(timer.seconds);
        timerDays.textContent = getZero(timer.day);
      }

      if (timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
      } else {
        clearTimeout(updateClock);
      }
    }
    updateClock();
  }

  countTimer('25 sept 2023');

});
let now_playing = document.querySelector('.now-playing');
  let track_art = document.querySelector('.track-art');
  let track_name = document.querySelector('.track-name');
  let track_artist = document.querySelector('.track-artist');
  
  let playpause_btn = document.querySelector('.playpause-track');
  let next_btn = document.querySelector('.next-track');
  let prev_btn = document.querySelector('.prev-track');
  
  let seek_slider = document.querySelector('.seek_slider');
  let volume_slider = document.querySelector('.volume_slider');
  let curr_time = document.querySelector('.current-time');
  let total_duration = document.querySelector('.total-duration');
  let wave = document.getElementById('wave');
  let randomIcon = document.querySelector('.fa-random');
  let curr_track = document.createElement('audio');
  
  let track_index = 0;
  let isPlaying = false;
  let isRandom = false;
  let updateTimer;
  
  const music_list = [
      {
          img : './img/disckoshar.png?raw=true',
          name : '?? ?????????? ??????',
          artist : '????????????',
          music : 'music/diskoshar.mp3'
      },
      {
          img : './img/diskoteka.png?raw=true',
          name : '?????????????????? 90-??',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/discoteka.mp3'
      },
      {
          img : './img/orgazm.png?raw=true',
          name : '????????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/ograzm.mp3'
      },
      {
          img : './img/otbrosi.png?raw=true',
          name : '???? ?????? ??????????????',
          artist : '????????????',
          music : 'music/otbrosi.mp3'
      },
      {
          img : './img/slezi.png?raw=true',
          name : '??????????',
          artist : '????????????',
          music : 'music/slezi.mp3'
      },
      {
          img : './img/urka.png?raw=true',
          name : '????????',
          artist : '????????????',
          music : 'music/urka.mp3'
      },
      {
          img : './img/diskoteka.png?raw=true',
          name : '?????????????? ??????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/vals.mp3'
      },
      {
          img : './img/opiaty.png?raw=true',
          name : '????????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/opiaty.mp3'
      },
      {
          img : './img/opiaty.png?raw=true',
          name : '??????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/porno.mp3'
      },
      {
          img : './img/laytovo.png?raw=true',
          name : '??????????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/laytovo.mp3'
      },
      {
          img : './img/opiaty.png?raw=true',
          name : '?? ????????????????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/nekrasivy.mp3'
      },
      {
          img : './img/opiaty.png?raw=true',
          name : '??????????????',
          artist : '???????????????????? ???? ???????? ??????',
          music : 'music/devochka.mp3'
      },
      {
          img : './img/disckoshar.png?raw=true',
          name : '?? ?? ?????? ???? ????????????',
          artist : '????????????',
          music : 'music/rayon.mp3'
      },
      {
          img : './img/slezi.png?raw=true',
          name : '?????????? ???????????? ????????',
          artist : '????????????',
          music : 'music/den.mp3'
      },
      {
          img : './img/slezi.png?raw=true',
          name : '?????????? ????????????',
          artist : '????????????',
          music : 'music/besitbumaga.mp3'
      },
  ];
  
  loadTrack(track_index);
  
  function loadTrack(track_index){
      clearInterval(updateTimer);
      reset();
  
      curr_track.src = music_list[track_index].music;
      curr_track.load();
  
      track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
      track_name.textContent = music_list[track_index].name;
      track_artist.textContent = music_list[track_index].artist;
      now_playing.textContent = "???????????? " + (track_index + 1) + " ??????????" + " ???? " + music_list.length;
  
      updateTimer = setInterval(setUpdate, 1000);
  
      curr_track.addEventListener('ended', nextTrack);
  }
  
  function reset(){
      curr_time.textContent = "00:00";
      total_duration.textContent = "00:00";
      seek_slider.value = 0;
  }
  function randomTrack(){
      isRandom ? pauseRandom() : playRandom();
  }
  function playRandom(){
      isRandom = true;
      randomIcon.classList.add('randomActive');
  }
  function pauseRandom(){
      isRandom = false;
      randomIcon.classList.remove('randomActive');
  }
  function repeatTrack(){
      let current_index = track_index;
      loadTrack(current_index);
      playTrack();
  }
  function playpauseTrack(){
      isPlaying ? pauseTrack() : playTrack();
  }
  function playTrack(){
      curr_track.play();
      isPlaying = true;
      track_art.classList.add('rotate');
      wave.classList.add('loader');
      playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
  function pauseTrack(){
      curr_track.pause();
      isPlaying = false;
      track_art.classList.remove('rotate');
      wave.classList.remove('loader');
      playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  }
  function nextTrack(){
      if(track_index < music_list.length - 1 && isRandom === false){
          track_index += 1;
      }else if(track_index < music_list.length - 1 && isRandom === true){
          let random_index = Number.parseInt(Math.random() * music_list.length);
          track_index = random_index;
      }else{
          track_index = 0;
      }
      loadTrack(track_index);
      playTrack();
  }
  function prevTrack(){
      if(track_index > 0){
          track_index -= 1;
      }else{
          track_index = music_list.length -1;
      }
      loadTrack(track_index);
      playTrack();
  }
  function seekTo(){
      let seekto = curr_track.duration * (seek_slider.value / 100);
      curr_track.currentTime = seekto;
  }
  function setVolume(){
      curr_track.volume = volume_slider.value / 100;
  }
  function setUpdate(){
      let seekPosition = 0;
      if(!isNaN(curr_track.duration)){
          seekPosition = curr_track.currentTime * (100 / curr_track.duration);
          seek_slider.value = seekPosition;
  
          let currentMinutes = Math.floor(curr_track.currentTime / 60);
          let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
          let durationMinutes = Math.floor(curr_track.duration / 60);
          let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
  
          if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
          if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
          if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
          if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
          curr_time.textContent = currentMinutes + ":" + currentSeconds;
          total_duration.textContent = durationMinutes + ":" + durationSeconds;
      }
  }




  