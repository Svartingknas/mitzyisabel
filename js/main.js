var wss_i = 0;
var wss_array = [`<i class="fa fa-4x fa-paint-brush "></i>
<h2 class="h3">Beautiful Design</h2>
<p>All websites are unique to their purpose.</p>`,`<i class="fa fa-4x fa-code "></i>
<h2 class="h3 ">Clean Code</h2>
<p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>`,`<i class="fa fa-4x fa-tablet "></i>
<h2 class="h3 ">Always Responsive</h2>
<p>All websites are responsive and adaptable to multiple platforms.</p>`];
var wss_elem;
function wssNext(){
	wss_i++;
	wss_elem.style.opacity = 0;
	if(wss_i > (wss_array.length - 1)){
		wss_i = 0;
	}
	setTimeout('wssSlide()',1000);
}
function wssSlide(){
	wss_elem.innerHTML = wss_array[wss_i];
	wss_elem.style.opacity = 1;
	setTimeout('wssNext()',3000);
}

wss_elem = document.getElementById('wss'); wssSlide();
