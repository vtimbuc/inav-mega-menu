$(document).ready(function(){

	$('.nav a').click(function(event){
		event.preventDefault()
	});

	// INPUT 1 - ul.nav

	$('#color1').ColorPicker({
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('ul.nav').css('background-color', '#' + hex);
			$('#color1').val(hex);
		},
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		}
	});

	// INPUT 2 - ul.nav li:hover

	$('#color2').ColorPicker({
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('ul.nav li.hover').css('background-color', '#' + hex);
			$('#color2').val(hex);
		},
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		}
	});

	// INPUT 3 - ul.nav li a.nav-item

	$('#color3').ColorPicker({
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('ul.nav li a.nav-item').css('color', '#' + hex);
			$('#color3').val(hex);
		},
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		}
	});

	// INPUT 4 - ul.nav li

	$('#color4').ColorPicker({
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('ul.nav li, ul.nav li.search-nav input').css('border-color', '#' + hex);
			$('#color4').val(hex);
		},
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		}
	});

	// INPUT 5 - ul.nav input:-moz-placeholder

	$('#color5').ColorPicker({
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#color5').val(hex);
		},
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		}
	});

	// GRADIENT LIGHT DARK

	$('#grad').click(function(){
	    var chk = $(this);
	    $('ul.nav').toggleClass('darkgrad', chk.attr('lightgrad'));
	    $('ul.nav li').toggleClass('darkhover', chk.attr('hover'));
	});

	// HOME LIGHT DARK

	$('#home').click(function(){
	    var chk = $(this);
	   	$('ul.nav li #icon').toggleClass('darkhome', chk.attr('lighthome'));
	});

	// CODE GENERATOR

	$('#cgen, #color, #color1, #color2, #color3, #color4, #color5').bind("mouseup mousedown keyup" , function(){
    	
		var colorname = $('#color').val(); // color name
		var color1    = $('#color1').val(); // menu color
		var color2    = $('#color2').val(); // hover color
		var color3    = $('#color3').val(); // link text color
		var color4    = $('#color4').val(); // border color
		var color5    = $('#color5').val(); // placeholder color

    	$('ul.nav').css('background-color', '#'+color1+'');
    	$('ul.nav li.hover').css('background-color', '#'+color2+'');
    	$('ul.nav li a.nav-item').css('color', '#'+color3+'');
    	$('ul.nav li, ul.nav li.search-nav input').css('border-color', '#'+color4+'');

    	// HTML CODE OUTPUT

		$('span.codeout0').html('<pre><span class="comment">/* '+colorname+' Color Scheme */</span></pre>');
    	
    	$('span.codeout1').html('<br><pre><span class="selector">ul.'+colorname+'</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-color</span>: <span class="value">#'+color1+'</span>;<br>}</pre>');
    	
    	$('span.codeout2').html('<br><pre><span class="selector">ul.'+colorname+' li:hover</span>,<span class="selector">ul.'+colorname+' li a.home:active</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-color</span>: <span class="value">#'+color2+'</span>;<br>}</pre>');
    	
    	$('span.codeout3').html('<br><pre><span class="selector">ul.'+colorname+' li a.nav-item</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">color</span>: <span class="value">#'+color3+'</span>;<br>}</pre>');
    	
    	$('span.codeout4').html('<br><pre><span class="selector">ul.'+colorname+' li</span>,<span class="selector">ul.'+colorname+' li .drop-full-col</span>,<span class="selector">ul.'+colorname+' li .drop-4-col</span>,<span class="selector">ul.'+colorname+' li .drop-3-col</span>,<span class="selector">ul.'+colorname+' li .drop-2-col</span>,<span class="selector">ul.'+colorname+' li .drop-1-col</span>,<span class="selector">ul.'+colorname+' li .drop-form</span>,<span class="selector">ul.'+colorname+' li ul.dropdown</span>,<span class="selector">ul.'+colorname+' li ul.dropdown li > ul</span>,<span class="selector">ul.'+colorname+' li.search-nav input</span>,<span class="selector">ul.'+colorname+' li a.last</span>,<span class="selector">ul.'+colorname+' li.last</span>,<span class="selector">#footer-nav ul.'+colorname+' li .drop-full-col</span>,<span class="selector">#footer-nav ul.'+colorname+' li .drop-4-col</span>,<span class="selector">#footer-nav ul.'+colorname+' li .drop-3-col</span>,<span class="selector">#footer-nav ul.'+colorname+' li .drop-2-col</span>,<span class="selector">#footer-nav ul.'+colorname+' li .drop-1-col</span>,<span class="selector">#footer-nav ul.'+colorname+' li .drop-form</span>,<span class="selector">#footer-nav ul.'+colorname+' li ul.dropdown</span>,<span class="selector">#footer-nav ul.'+colorname+' li ul.dropdown li > ul</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">border-color</span>: <span class="value">#'+color4+'</span>;<br>}</pre>');
    	
    	$('span.codeout5').html('<br><pre><span class="selector">ul.'+colorname+' li.search-nav input:-moz-placeholder</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">color</span>: <span class="value">#'+color5+'</span>;<br>}<br><br><span class="selector">ul.'+colorname+' li.search-nav input::-webkit-input-placeholder</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">color</span>: <span class="value">#'+color5+'</span>;<br>}</pre>');

    	$('span.codeout8').html('<br><pre><span class="selector">ul.'+colorname+' li a.nav-item:active</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">-webkit-box-shadow</span>: <span class="value">inset 0 4px 8px rgba(0, 0, 0, 0.2)</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">-moz-box-shadow</span>: <span class="value">inset 0 4px 8px rgba(0, 0, 0, 0.2)</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">box-shadow</span>: <span class="value">inset 0 4px 8px rgba(0, 0, 0, 0.2)</span>;<br>}</pre>');
    	
    });

    $('#grad').change(function(){

		var colorname = $('#color').val(); // color name

		if($('#grad').is(':checked')){
			
			$('span.codeout6').html('<br><pre><span class="selector">ul.'+colorname+'</span> {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-image</span>:<span class="value">-webkit-gradient(linear, 0 0, 0 100%, color-stop(0, rgba(0, 0, 0, 0.05)), color-stop(0.5, rgba(0, 0, 0, 0.1)), color-stop(0.5, rgba(0, 0, 0, 0.15)), to(rgba(0, 0, 0, 0.1)))</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-image</span>:<span class="value">-webkit-linear-gradient(top, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.1) 100%)</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-image</span>:<span class="value">-moz-linear-gradient(top, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.1) 100%)</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-image</span>:<span class="value">-o-linear-gradient(top, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.1) 100%)</span>;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="property">background-image</span>:<span class="value">linear-gradient(top, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.1) 100%)</span>;<br>}</pre>');

		}else{
			
			$('span.codeout6').html('');
		}

	});

	$('#home').change(function(){

		var colorname = $('#color').val(); // color name

		if($('#home').is(':checked')){
			
			$('span.codeout7').html('<br><pre class="rhome"><span class="selector">ul.'+colorname+' li a.home</span> { <span class="property">background</span>: <span class="value">url("../img/home_dark.png") center center no-repeat</span>; <span class="property">text-indent</span>: <span class="value">-9999px</span>; }</pre>');

		}else{
			
			$('span.codeout7').html('');

		}

	});

});