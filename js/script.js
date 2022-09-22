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
          img : '/img/disckoshar.jpg',
          name : 'Я диско шар',
          artist : 'Кишлак',
          music : 'music/diskoshar.mp3'
      },
      {
          img : '/img/diskoteka.jpg',
          name : 'Дискотека 90-х',
          artist : 'Автостопом по фазе сна',
          music : 'music/discoteka.mp3'
      },
      {
          img : '/img/orgazm.jpg',
          name : 'Оргазм',
          artist : 'Автостопом по фазе сна',
          music : 'music/ograzm.mp3'
      },
      {
          img : '/img/otbrosi.jpg',
          name : 'Вы все отбросы',
          artist : 'Кишлак',
          music : 'music/otbrosi.mp3'
      },
      {
          img : '/img/slezi.jpg',
          name : 'Слёзы',
          artist : 'Кишлак',
          music : 'music/slezi.mp3'
      },
      {
          img : '/img/urka.jpg',
          name : 'Урка',
          artist : 'Кишлак',
          music : 'music/urka.mp3'
      },
      {
          img : '/img/diskoteka.jpg',
          name : 'Собачий вальс',
          artist : 'Автостопом по фазе сна',
          music : 'music/vals.mp3'
      },
      {
          img : '/img/opiaty.jpg',
          name : 'Опиаты',
          artist : 'Автостопом по фазе сна',
          music : 'music/opiaty.mp3'
      },
      {
          img : '/img/opiaty.jpg',
          name : 'Порно',
          artist : 'Автостопом по фазе сна',
          music : 'music/porno.mp3'
      },
      {
          img : '/img/laytovo.jpg',
          name : 'Лайтово',
          artist : 'Автостопом по фазе сна',
          music : 'music/laytovo.mp3'
      },
      {
          img : '/img/opiaty.jpg',
          name : 'Я некрасивый',
          artist : 'Автостопом по фазе сна',
          music : 'music/nekrasivy.mp3'
      },
      {
          img : '/img/opiaty.jpg',
          name : 'Девочка',
          artist : 'Автостопом по фазе сна',
          music : 'music/devochka.mp3'
      },
      {
          img : '/img/disckoshar.jpg',
          name : 'А у нас на районе',
          artist : 'Кишлак',
          music : 'music/rayon.mp3'
      },
      {
          img : '/img/slezi.jpg',
          name : 'Самый лучший день',
          artist : 'Кишлак',
          music : 'music/den.mp3'
      },
      {
          img : '/img/slezi.jpg',
          name : 'Бесит бумага',
          artist : 'Кишлак',
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
      now_playing.textContent = "Играет " + (track_index + 1) + " песня" + " из " + music_list.length;
  
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

const kishlakCont = document.querySelector('.kishlak__container'),
  kishlakArrow = document.querySelector('.kishlak__arrow');
kishlakArrow.addEventListener('click', () => {
    kishlakCont.classList.toggle('kishlak__show')
});