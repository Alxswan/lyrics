
$(document).ready(function(){
  var nlp = window.nlp_compromise;

  var lyric = $('.lyrics').text();
  lyric = lyric.replace(/(\r\n|\n|\r)/gm, " ");
  var parsed = nlp.sentence(lyric)
  var tags = parsed.tags();

  //console.log(parsed.topics());

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
  console.log(obj)

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  

  // var find = parsed.terms.find(function(thing) {
  //   if (nlp.text(thing) === 'Person');
  //   return thing;
  // })
  // console.log(find);


});