let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector('.header');

  if (prevScrollPos > currentScrollPos && currentScrollPos > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  prevScrollPos = currentScrollPos;
});



/*=========================================================*/
let menuIcon = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

/*=========================================================*/
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
   
        this.classList.toggle("active");

        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}



$(document).ready(function() {
	
	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-70}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
});
