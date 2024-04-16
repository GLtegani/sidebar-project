const NavData = {
   // BTNS AREA
   closeNav: document.querySelector('.close'),
   openNav: document.querySelector('.open'),

   // NAVIGATION CONTAINER
   navContainer: document.querySelector('#navigation-container'),
};

// FUNCTIONS
const showContent = () => {
   NavData.navContainer.classList.toggle('hide');
   NavData.navContainer.classList.toggle('show');
};

// EVENTS
NavData.openNav.addEventListener('click', showContent);
NavData.closeNav.addEventListener('click', showContent);


// EXPORTS
export {showContent};