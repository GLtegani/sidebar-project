const NavData = {
   // STATE CHANGE
   hide: document.querySelector('.hide'),
   showBlock: document.querySelector('.show'),
   showFlex: document.querySelector('.show-flex'),

   // BTNS AREA
   closeNav: document.querySelector('.close'),
   openNav: document.querySelector('.open'),

   // NAVIGATION CONTAINER
   navContainer: document.querySelector('#navigation-container'),
   header: document.querySelector('#btn-menu-container'),
};

// VARIABLES
// FUNCTIONS

const showNav = () => {
   NavData.navContainer.style.display = 'flex';
}

const hideNav = () => {
   NavData.navContainer.style.display = 'none';
   
}


// EVENTS
NavData.openNav.addEventListener('click', showNav);
NavData.closeNav.addEventListener('click', hideNav);


// EXPORTS
export {showNav};