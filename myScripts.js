//var t0 = performance.now();
$( document ).ready(function() {
  //get parameters
  var noAnimation = getUrlParameter('noAnimation') ;
  if (noAnimation == null) {
  noAnimation = false;
  }
  var smallSize = getUrlParameter('smallSize') ;
  //katex rendering
  //renderMathInElement(document.body);
  //class mémo cacher la 2e colonne
  $('div.mémo tr').find('td:last').wrapInner( "<div class='h' style='width:100%'></div>");
  //cacher les choses à cacher
  $('.h').css("opacity","0");
  //create progress bar
  //$('body').prepend('<div id="progress" style="width:0;height:2px;background-color:#88a34f;position:sticky;top:0;transition: width .5s;"></div>');
  $("h2").each(function() {$(this).wrapInner("<p><span class='underline'></span></p>")});
  $("h3").each(function() {$(this).wrapInner("<p><span class='underline'></span></p>")});
  $('.h').attr('id', function (index) {	return 'cach-' + index;}); //attribue un id à tous les trucs à cacher
  var result= location.href.split('/');
  var base = "../" + result[result.length-3] + "/" + result[result.length-2] + "/";
  $('img.visu').each(function(){$(this).before("<a href=../../.resources/img.html?img=" + base + $(this).attr('src') + "></a>")});
  if (noAnimation == "true" || noAnimation == true){
    $('.h').removeClass("h");
    }else{
      $('.h:not(span.h)').each(function(){$(this).wrap("<span id=s_" + $(this).attr('id') + " class='cache' style='display:block;'></span>")}); //entoure d'un span les éléments à cacher. Ce span sert à indiquer que qqchse est caché (pointillés) inline-block et inline-flex ne fonctionne pas pour éviter les pb avec des puces mal placés, et de ne pas prendre tte la page. inline grid pb avec des puces ne prend pas tte la page. En clair si inline-block ne fonctionne pas, il faudra traiter différement la class h selon qu'elle soit sur un div ou un span
	  $('span.h').each(function(){$(this).wrap("<span id=s_" + $(this).attr('id') + " class='cache' style='display:inline;'></span>")}); //entoure d'un span les éléments à cacher. Ce span sert à indiquer que qqchse est caché (pointillés) inline-block et inline-flex ne fonctionne pas pour éviter les pb avec des puces mal placés, et de ne pas prendre tte la page. inline grid pb avec des puces ne prend pas tte la page. En clair si inline-block ne fonctionne pas, il faudra traiter différement la class h selon qu'elle soit 
    }
/*if smallsize is true*/
  if (smallSize == null || smallSize == false) {
    smallSize = false;
    }else{
    //À trafiquer car c'est un peu pourri...
    //$('body').css({"transform":"scale(0.7)","transform-origin": "top"});
    $(".container").css({'max-width':'960px','padding-right':'10px','padding-left':'10px'});
    //$(".underline").addClass("underline_ss");
    $("body").css({'font-size':'32px'});
    /*$(".underline").removeClass("underline");*/
    }
/*enlarge div details to full width*/
  var marges = $("html").width() - $(".container").width();
  marges = marges / 2 ;
  $(".details").each(function(){$(this).css("box-shadow", marges + "px 0px 0px 0px #646464,-" + marges + "px 0px 0px 0px #646464")});
  /*    $('.h').each(function(){$(this).wrap("<span id=s_" + $(this).attr('id') + " class='cache' style='display:inline-block;'></span>")}); //entoure d'un span les éléments à cacher. Ce span sert à indiquer que qqchse est caché (pointillés)*/
  $('img.h').parent().each(function(){$(this).css('width','100%');});
  $('.editV').attr('contenteditable', true);
  $( ".exercices" ).each(function() {$(this).after("<div class=\"ttExercices\" title=\"" + $(this).text() + "\">✱</div>")});//les ex sont affichés en tooltip
  $( ".notes" ).each(function() {$(this).after("<div class=\"ttNotes\" title=\"" + $(this).text()+"\">✱</div>")});//les notes sont affichés en tooltip
  $( "a" ).each(function() {$(this).addClass("ttLink")});
  $( "a" ).each(function() {$(this).html("<svg fill='currentColor' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='external-link-alt' class='tt svg-inline--fa fa-external-link-alt fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path fill='currentColor' d='M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z'></path></svg>")});

//écoute l'evt wheel pour pouvoir changer les marges si alt est appuyé
	document.addEventListener("wheel",chgMargin, false);

	$('img').each(function() {if($(this).hasClass("act")){$(this).wrap("<div class='imgContainer act'></div>");}else{$(this).wrap("<div class='imgContainer'></div>");};}); // pour éviter un bug dans la génération du pdf ou les ombres débordent sur la page précédente, et fait suivre la classe act au parent
		
	$('img').on('dragstart', function(event) { event.preventDefault(); }); //évite que l'on puisse faire un drag & drop sur les img qui perturberait la fn pan
	//$('div.def1').prepend("<p class='defTitle'><span class='defTitle'>"+$(this).attr('id')"</span></p>");
	//$('div.def1').each(function() {$(this).prepend("<p class='defTitle'><span class='defTitle'>"+$(this).attr('id')+"</span></p>")});
    $('span.cache').each(function() {$(this).attr("onclick", "affiche('" + $(this).find('.h').attr('id') +"')")}); //pour toutes les classes h definit l'evt onclick du parent vers la fonction affiche
$('span.vidéo').each(function(){$(this).replaceWith("<video controls src='" + $(this).text() + "' data-external='1' style='width:60%;margin-left:20%' preload='none'><track src=\"" + $(this).text() + ".vtt\" label=\"French\" kind=\"subtitles\" srclang=\"fr\" default> </video>")});

//$('img.visu').each(function(){$(this).attr('href','../../.resources/img.html?img=' + base + $(this).attr('href')  ) });
//$('p img.visu').each(function(){$(this).after("<a class=\"visu\" href=../../.resources/img.html?img=" + base + $(this).attr('src') + "><div class='afterVisu'><div></a>")});
	
 $(document).keydown(function(e){
  if(e.keyCode == 39 && !e.ctrlKey) {
     e.preventDefault();
     window.scrollBy(0, +100);
  }
  
  if(e.keyCode == 37 && !e.ctrlKey) {
     e.preventDefault();
     window.scrollBy(0, -100);
  }
  
  if(e.keyCode == 182 || ( e.keyCode == 39 && e.ctrlKey ) ) {
     e.preventDefault();
     $('.h').each(function(){
		 if ($(this).css('opacity') == ('0')) {
		affiche($(this).attr('id'));
			 return false;
			 }
		
		 });
  }
  
  if(e.keyCode == 183 || ( e.keyCode == 37 && e.ctrlKey ) ) {
     e.preventDefault();
     $($('.h').get().reverse()).each(function(){
		 if ($(this).css('opacity') == ('1')) {
		affiche($(this).attr('id'));
			 return false;
			 }
		 });

  }
  
  
});

function chgMargin(e){
	if ( e.altKey == true ) {
	e.preventDefault();
	$(".container").css('width', $(".container").innerWidth()-e.deltaY*20);
	//}else{
//on anime la barre de progression
//    var conheight = $('html').height();
//alert(conheight);
//length from the top
//    var scrollTop = $(document).scrollTop();
//    var scrollAmount = $(window).scrollTop();
//alert(scrollAmount);
//    var documentHeight = $(document).height();
    // calculate the percentage the user has scrolled down the page
//    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height()); 
//$("#progress").css("width",scrollPercent + "%");

}};

//fonction pour choper les param get
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
		
});
function affiche(id) {
 var el = document.getElementById(id);
 var span = document.getElementById("s_"+id);
 if(el.style.opacity != 1){
  el.style.opacity = 1;
  span.style.borderWidth = "0px";
 }else{
  el.style.opacity = 0;
  span.style.borderWidth = "1px";
 };
}

