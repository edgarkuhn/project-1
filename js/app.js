const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menu_item = document.querySelectorAll('.header .navbar .navlist ul a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
	var scroll_position = window.scrollY;
	if(scroll_position > 250){
		header.style.backgroundColor = "#4C1115";
	} else{
		header.style.backgroundColor = "transparent";
	}
	
})

menu_item.forEach((item)=>{
	item.addEventListener('click',() => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');	
	});
})
