$(document).ready(function(){
  var nlp = window.nlp_compromise;

  var lyric = $('.lyrics').text();
  lyric = lyric.replace(/(\r\n|\n|\r)/gm, " ");
  var parsed = nlp.sentence(lyric)
  var tags = parsed.tags();
  var array = parsed.terms;
  console.log(parsed.terms[590]);

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var unique = tags.filter( onlyUnique );
  console.log(unique.length);
  var obj = {};

  for (var i = 0; i < unique.length; i++){
    var count = tags.reduce(function(n, val) {
    return n + (val === unique[i]);
}, 0);
    obj[unique[i]] = {"count": count, "colour": getRandomColor()};
  }
  console.log(obj.Noun.colour)

  $('.lyrics').hide();
  var $p = $("<p class='colours'/>").css("text-align", "center");
  var $p2 = $("<p class='types'/>")
  var $p3 = $("<p class='instructions'/>");
  $p3.text("?song=FirstName-LastName-Song-Name-Lyrics").css("text-align", "center")
  $p2.css("font-size", "10px");
  $p2.css("margin", "auto").css("text-align", "center");
  $('body').append($p2);
  $('body').append($p);
  $('body').append($p3);


  for (var i = 0; i < array.length; i++){
    var word = array[i].text;
    var type = array[i].tag;
    if (type){
    var colour = obj[type].colour;
    var $span =$('<span> '+word+' </span>').css("color", colour);
    $p.append($span);
    $p.css("font-size", "20px");
    }
  }

  for (var i = 0; i < unique.length; i++){
    var word = unique[i];
    var colour = obj[word].colour;
    var $span =$('<span> '+word+' </span>').css("color", colour);
    $p2.append($span);
 
    $('h2').css("text-align", "center")
  }


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