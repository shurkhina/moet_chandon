// Polyfill for IE11 missing NodeList.forEach 
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
};

// menu
if(document.querySelector('.hamburger')){
	let btnMenu = document.querySelector('.hamburger'),
		menuMob = document.querySelector('.navigation_mob'),
		overlyMenu = document.querySelector('.overly'),
		body = document.body;

	btnMenu.addEventListener('click', function(){
		if(btnMenu.classList.contains('is-active') === true){
		btnMenu.classList.remove('is-active');
		menuMob.classList.remove('navigation_mob__open');
		body.classList.remove('body__scroll');
		overlyMenu.style.display = 'none';
		this.setAttribute('aria-expanded', false);
	} else {
		btnMenu.classList.add('is-active');
		menuMob.classList.add('navigation_mob__open');
		body.classList.add('body__scroll');
		overlyMenu.style.display = 'block';
		this.setAttribute('aria-expanded', true);
	}
	})

	overlyMenu.addEventListener('click', function(){
		btnMenu.classList.remove('is-active');
		menuMob.classList.remove('navigation_mob__open');
		body.classList.remove('body__scroll');
		overlyMenu.style.display = 'none';
	});
}

// click navigation
if(document.querySelector('.navigation_mob')){
	let menuMob = document.querySelector('.navigation_mob'),
		overlyMenu = document.querySelector('.overly'),
		btnMenu = document.querySelector('.hamburger'),
		body = document.body,
		navMoblis = document.querySelectorAll('.navigation_mob li');

		navMoblis.forEach(function(el){
			el.addEventListener('click', function(){
				menuMob.classList.remove('navigation_mob__open');
				body.classList.remove('body__scroll');
				overlyMenu.style.display = 'none';
				btnMenu.classList.remove('is-active');
			});
		});
}

// view slider
if(document.querySelector('.view__slider')){
	let swiper = new Swiper('.view__slider', {

	  pagination: {
	    el: '.swiper-pagination',
	    type:'fraction',
	  },

	  scrollbar: {
	    el: '.swiper-scrollbar',
	    draggable: true,
	  },
	});
}


// history slider
if(document.querySelector('.history__slider')){
	function updSwiperNumericPagination() {
	  document.querySelector( '.swiper-counter' )
	    .innerHTML = '<span class="count">'+ (this.realIndex + 1) +'</span>/<span class="total">'+ this.el.slidesQuantity +'</span>';
	}

	document.addEventListener( 'DOMContentLoaded', function () {
	  document.querySelectorAll( '.history__slider' ).forEach( function( node ) {
	    node.slidesQuantity = node.querySelectorAll( '.swiper-slide' ).length;
	    
	    new Swiper( node, {
	      pagination:    { el: node.querySelector('.swiper-pagination'),
	      					clickable: true, },
	      on: { 
	        init:        updSwiperNumericPagination,
	        slideChange: updSwiperNumericPagination
	      },
	      navigation: {
	          nextEl: ".swiper-button-next",
	          prevEl: ".swiper-button-prev",
	        },
	    });
	  });
	});
}

// busy slider
if(document.querySelector('.busy__slider')){
	let swiper = new Swiper('.busy__slider', {
  		slidesPerView: 'auto',
  		spaceBetween: 20,
  		scrollbar: {
    		el: ".swiper-scrollbar",
    		dragSize:57,
  		},
  		navigation: {
	          nextEl: ".swiper-button-next",
	          prevEl: ".swiper-button-prev",
	        },

	});
	
}

