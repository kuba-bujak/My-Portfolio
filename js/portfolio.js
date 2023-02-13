const menu = [
	{
	  id: 1,
	  title: "Papuga",
	  category: "Design",
	  img: "../images/papuga.png",
	  url: "https://kuba-bujak.github.io/Papuga/"
	},
	{
	  id: 2,
	  title: "Coffee Truck",
	  category: "Design",
	  img: "../images/coffee-truck.png",
	  url: "https://kuba-bujak.github.io/Coffee-Truck/"
	},
	{
	  	id: 3,
		title: "WLKS",
		category: "WordPress",
		img: "../images/wlks.png",
		url: "https://wlks.pl"
	},
	{
	  id: 4,
	  title: "Coming Soon 1",
	  category: "Design",
	  img: "../images/coming-soon-1.png",
	  url: "https://kuba-bujak.github.io/Coming-Soon-1/"
	},
	{
	  id: 5,
	  title: "Coming Soon 2",
	  category: "Design",
	  img: "../images/coming-soon-2.png",
	  url: "https://kuba-bujak.github.io/Coming-Soon-2/"
	},
	{
	  id: 6,
	  title: "Museum Of Candy",
	  category: "Design",
	  img: "../images/museum-of-candy.png",
	  url: "https://kuba-bujak.github.io/Museum-of-Candy/"
	},
	{
	  id: 7,
	  title: "Counter",
	  category: "Other",
	  img: "../images/counter.png",
	  url: "https://kuba-bujak.github.io/Counter/"
	},
	{
	  id: 8,
	  title: "Menu",
	  category: "Other",
	  img: "../images/menu.png",
	  url: "https://kuba-bujak.github.io/Menu/"
	},
	{
	  id: 9,
	  title: "Design Graphic",
	  category: "Other",
	  img: "../images/design-graphic.png",
	  url: "http://jakubbujak.wwwprojekt.pl/lp/2"
	},
	{
	  id: 10,
	  title: "Grocery List",
	  category: "Other",
	  img: "../images/grocery-list.png",
	  url: "https://kuba-bujak.github.io/Grocery-List/"
	},
	{
		id: 11,
		title: "Hailmoirdrise Construction",
		category: "Design",
		img: "../images/hailomidrise-construction.png",
		url: "https://kuba-bujak.github.io/Hailomidrise-Construction/"
	 },
	 {
		id: 13,
		title: "Netflix",
		category: "Design",
		img: "../images/netflix.png",
		url: "https://kuba-bujak.github.io/Video-Streaming/"
	 },
	 {
		id: 14,
		title: "PDF Generator",
		category: "Other",
		img: "../images/pdf-generator.png",
		url: "https://kuba-bujak.github.io/PDF-Generator/"
	 },
	 {
		id: 15,
		title: "Photo Blog",
		category: "Design",
		img: "../images/photo-blog.png",
		url: "https://kuba-bujak.github.io/Photo-Blog/"
	 },
	 {
		id: 16,
		title: "Photographix",
		category: "Design",
		img: "../images/photogprahix.png",
		url: "https://kuba-bujak.github.io/User-Interface-Animations/"
	 },
	 {
		id: 17,
		title: "Portfolio",
		category: "Design",
		img: "../images/portfolio.png",
		url: "https://kuba-bujak.github.io/Personal-Porfolio-Webpage/"
	 },
	 {
		id: 18,
		title: "Pricing",
		category: "Other",
		img: "../images/pricing.png",
		url: "https://kuba-bujak.github.io/Pricing-Panel/"
	 },
	 {
		id: 19,
		title: "Real Estate",
		category: "Design",
		img: "../images/real-estate.png",
		url: "https://kuba-bujak.github.io/Real-Estate/"
	 },
	 {
		id: 20,
		title: "Revies",
		category: "Other",
		img: "../images/revies.png",
		url: "https://kuba-bujak.github.io/Reviews/"
	 },
	 {
		id: 21,
		title: "Shopping List",
		category: "Other",
		img: "../images/shopping-list.png",
		url: "https://kuba-bujak.github.io/Shopping-List/"
	 },
	 {
		id: 22,
		title: "Sidebar",
		category: "Other",
		img: "../images/sidebar.png",
		url: "https://kuba-bujak.github.io/Sidebar/"
	 },
	 {
		id: 23,
		title: "University",
		category: "WordPress",
		img: "../images/university.png",
		url: "http://jakubbujak.wwwprojekt.pl/lp/1/"
	 },
	 {
		id: 24,
		title: "Color Flipper",
		category: "Other",
		img: "../images/color-flipper.png",
		url: "https://kuba-bujak.github.io/Color-Flipper/"
	 },
	 {
		id: 25,
		title: "Questions",
		category: "Other",
		img: "../images/questions.png",
		url: "https://kuba-bujak.github.io/Questions/"
	 }
 ];
 
 const portfolioFiles = document.querySelector('.portfolio-files');
 const filterButtons = document.querySelector('.filter-buttons')
 
 
 // load items
 window.addEventListener('DOMContentLoaded', function(){
	displayMenuItems(menu);
	displayMenuButtons();
 });
 
 
 function displayMenuItems(menuItems){
	let displayMenu = menuItems.map(function(item){
 
	  return `<a href="${item.url}" target="_blank"><div class="portfolio__file" style="background: url('${item.img}') no-repeat center; background-size: cover">
	  <div class="portfolio__file--overlay">
	  <i class="fa-solid fa-magnifying-glass"></i>
	  </div></div></a>`
	});
	displayMenu = displayMenu.join("");
	portfolioFiles.innerHTML = displayMenu;
 }
 
 function displayMenuButtons(){
	const categories = menu.reduce(function(values,item){
	  if(!values.includes(item.category)){
		 values.push(item.category);
	  }
	  return values;
	},['All']);
	const categoryBtns = categories.map(function(category){
	  return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
	})
	.join('');
	filterButtons.innerHTML = categoryBtns;
	const filterBtns = filterButtons.querySelectorAll('.filter-btn');
	filterBtns[0].classList.add('btn-active');
	// filter items
 filterBtns.forEach(function(btn){
	btn.addEventListener('click', function(e){
		filterBtns.forEach((buttons) => buttons.classList.remove('btn-active'));
	  	const category = e.currentTarget.dataset.id;
	  	e.currentTarget.classList.add('btn-active');
	  	const menuCategory = menu.filter(function(menuItem){
		 	if(menuItem.category === category){
				return menuItem;
		 	};
	  	});
	  if(category === 'All'){		
		displayMenuItems(menu);
	  }
	  else{
		displayMenuItems(menuCategory); 
	  }
	});
 });
 }
 