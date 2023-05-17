const menuBtn = document.querySelector('.header__nav-btn');
const menuBtnIcon = document.querySelector('.nav-icon');
const menu = document.querySelector('.header__top-wrapper');

menuBtn.addEventListener('click', e => {
    menuBtnIcon.classList.toggle('nav-icon--active');
    menu.classList.toggle('header__top-wrapper--mobile');
    document.body.classList.toggle('no-scroll');
})


// phone mask
mask('[data-tel-input]');

// remove '+' if nothing else is entered, to show placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if(input.value == '+') input.value = '';
    })
})



// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 46.480272, lng: 30.755334 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;