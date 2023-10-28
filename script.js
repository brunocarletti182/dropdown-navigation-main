//open and close features popup
const featuresSelect = document.querySelector(".header__select-features")
const featuresWindow = document.querySelector(".header__features");
featuresSelect.addEventListener("click", addFeatures);
function addFeatures() {
  featuresWindow.classList.toggle("header_show");
  companyWindow.classList.remove("header_show")
}

//open and close company popup
const companySelect = document.querySelector(".header__select-company")
const companyWindow = document.querySelector(".header__company");
companySelect.addEventListener("click", addCompany);
function addCompany() {
  companyWindow.classList.toggle("header_show");
  featuresWindow.classList.remove("header_show")
}

//close popups when you click anywhere outside of the window
document.addEventListener("click", closePopup);
  
  function closePopup(event){
  if (!featuresSelect.contains(event.target) && !featuresWindow.contains(event.target)) {
    featuresWindow.classList.remove("header_show");
  }

  if (!companySelect.contains(event.target) && !companyWindow.contains(event.target)) {
    companyWindow.classList.remove("header_show");
  }
}

const burguerSelect = document.querySelector(".header__burguer");
const mobileMenu = document.querySelector(".page__half-screen");
const pageOverlay = document.querySelector(".page__overlay");

const mobileClose = document.querySelector(".half__close-button");

function addMobileMenu() {
  mobileMenu.classList.toggle("page__half-screen_show");
  pageOverlay.classList.add("page__overlay_show");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("page__half-screen_show");
  pageOverlay.classList.remove("page__overlay_show");
}

mobileClose.addEventListener("click", closeMobileMenu);
burguerSelect.addEventListener("click", addMobileMenu);





