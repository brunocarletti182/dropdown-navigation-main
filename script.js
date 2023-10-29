//select items

const featuresSelect = document.querySelector(".header__select-features")
const featuresWindow = document.querySelector(".header__features");
const headerArrowfeature = document.querySelector(".header__arrow_features");

const companySelect = document.querySelector(".header__select-company")
const companyWindow = document.querySelector(".header__company");
const headerArrowCompany = document.querySelector(".header__arrow_company");

const pageOverlay = document.querySelector(".page__overlay");
const burguerSelect = document.querySelector(".header__burguer");

const mobileMenu = document.querySelector(".page__half-screen");
const mobileClose = document.querySelector(".half__close-button");

const selectFeatureHalf = document.querySelector(".half__select-feature");
const selectCompanyHalf = document.querySelector(".half__select-company");

const featuresHalf = document.querySelector(".half__hidden-features");
const companyHalf = document.querySelector(".half__hidden-company");

//functions

function addFeatures() {
  featuresWindow.classList.toggle("header_show");
  companyWindow.classList.remove("header_show")
  headerArrowfeature.classList.toggle("header__arrow_up");
}

function addCompany() {
  companyWindow.classList.toggle("header_show");
  featuresWindow.classList.remove("header_show")
  headerArrowCompany.classList.toggle("header__arrow_up");
}

function closePopup(event){
  if (!featuresSelect.contains(event.target) && !featuresWindow.contains(event.target)) {
    featuresWindow.classList.remove("header_show");
    headerArrowfeature.classList.remove("header__arrow_up");
  }

  if (!companySelect.contains(event.target) && !companyWindow.contains(event.target)) {
    companyWindow.classList.remove("header_show");
    headerArrowCompany.classList.remove("header__arrow_up");
  }
}

function addMobileMenu() {
  mobileMenu.classList.add("page__half-screen_show");
  pageOverlay.classList.add("page__overlay_show");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("page__half-screen_show");
  pageOverlay.classList.remove("page__overlay_show");
  companyHalf.classList.remove("half__hidden_show");
  featuresHalf.classList.remove("half__hidden_show");
}

function handleScreenSizeChange() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 719) {
    // Hide the mobile menu and overlay on larger screens
    mobileMenu.classList.remove("page__half-screen_show");
    pageOverlay.classList.remove("page__overlay_show");
  }
}

function addFeaturesHalf() {  
  featuresHalf.classList.toggle("half__hidden_show");
  companyHalf.classList.remove("half__hidden_show");
}

function addCompanyHalf() {
  companyHalf.classList.toggle("half__hidden_show");
  featuresHalf.classList.remove("half__hidden_show");
}

//event listeners
featuresSelect.addEventListener("click", addFeatures);
companySelect.addEventListener("click", addCompany);
document.addEventListener("click", closePopup);
mobileClose.addEventListener("click", closeMobileMenu);
burguerSelect.addEventListener("click", addMobileMenu);
window.addEventListener("resize", handleScreenSizeChange);
selectFeatureHalf.addEventListener("click", addFeaturesHalf);
selectCompanyHalf.addEventListener("click", addCompanyHalf);

//call functions
handleScreenSizeChange();









