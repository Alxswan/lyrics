$(document).ready(function(){
  var nlp = window.nlp_compromise;

  var lyric = $('.lyrics').text();
  console.log(lyric);
  lyric = lyric.replace(/(\r\n|\n|\r)/gm, " ");
  var parsed = nlp.sentence(lyric)
  var tags = parsed.tags();
  var array = parsed.terms;
 

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var unique = tags.filter( onlyUnique );
  var obj = {};

  for (var i = 0; i < unique.length; i++){
    var count = tags.reduce(function(n, val) {
    return n + (val === unique[i]);
}, 0);
    obj[unique[i]] = {"count": count, "colour": getRandomColor()};
  }

  $('.lyrics').hide();
  var $p = $("<p class='colours'/>").css("text-align", "center");
  var $p2 = $("<p class='types'/>")

  $p2.css("font-size", "10px");
  $p2.css("margin", "auto").css("text-align", "center");
  $('.guts').append($p2);
  $('.guts').append($p);


  for (var i = 0; i < array.length; i++){
    var word = array[i].text;
    var type = array[i].tag;
    if (type){
    var colour = obj[type].colour;
      if (type == '?'){
        type = 'unknown'
      }
    var $span =$('<span> '+word+' </span>').css("color", colour).addClass(type);
    $p.append($span);
    $p.css("font-size", "20px");
    }
  }

  for (var i = 0; i < unique.length; i++){
    var word = unique[i];
    if (word != '?') {
      var newClass = word;
    } else {
      var newClass = 'unknown';
    }
    var colour = obj[word].colour;
    var $span =$('<span> '+word+' </span>').css("color", colour).addClass(newClass);
    $p2.append($span);
 
    $('h2').css("text-align", "center")
  }

$('.colours span').on('mouseover', function(){
  var c = $(this).attr("class"); 
   $(this).css('font-size', '45px'); 
   $('.types span' + '.' + c).css('font-size', '30px');
})

$('.colours span').on('mouseout', function(){
  var c = $(this).attr("class"); 
   $(this).css('font-size', '20px'); 
   $('.types span' + '.' + c).css('font-size', '10px');
})

$('.types span').on('mouseover', function(){
  var c = $(this).attr("class"); 
   $(this).css('font-size', '30px'); 
   $('.colours span' + '.' + c).css('font-size', '40px');
})

$('.types span').on('mouseout', function(){
  var c = $(this).attr("class"); 
   $(this).css('font-size', '10px'); 
   $('.colours span' + '.' + c).css('font-size', '20px');
})


function getRandomColor() {
  var colours = 
        ["#ff3333",
        "#ff6633", 
        "#ff9933", 
        "#ffcc33", 
        "#ffff33",
        "#ccff33",
        "#99ff33",
        "#66ff33", 
        "#33ff33", 
        "#33ff66", 
        "#33ff99",
        "#33ffcc",
        "#33ffff",
        "#33ccff",
        "#3399ff",
        "#3366ff",
        "#3333ff",
        "#6633ff", 
        "#9933ff", 
        "#cc33ff", 
        "#ff33ff", 
        "#ff33cc", 
        "#ff3399", 
        "#ff3366", 
        "#ff3333"]

    var colour = Math.floor(Math.random() * colours.length);
    return colours[colour];
}

});