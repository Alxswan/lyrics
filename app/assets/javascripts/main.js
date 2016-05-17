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
    // var letters = '0123456789ABCDEF'.split('');
    // var color = '#';
    // for (var i = 0; i < 6; i++ ) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    //return color;
}
  $('.lyrics').empty();
  var $p = $("<p class='colours'/>");
  $('body').append($p);

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



  // var find = parsed.terms.find(function(thing) {
  //   if (nlp.text(thing) === 'Person');
  //   return thing;
  // })
  // console.log(find);


});