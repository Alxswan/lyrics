
$(document).ready(function(){
  var nlp = window.nlp_compromise;

  var lyric = $('.lyrics').text();
lyric = lyric.replace(/(\r\n|\n|\r)/gm, " ");
  console.log(lyric);
  var parsed = nlp.sentence(lyric)
  var tags = parsed.tags();
  console.log(parsed);
  console.log(tags);
  console.log(parsed.topics());

  var noun = tags.reduce(function(n, val) {
    return n + (val === "Noun");
}, 0);


  var adj = tags.reduce(function(n, val) {
    return n + (val === "Adjective");
}, 0);
  console.log(noun)
  console.log(adj)

  var sort = parsed.terms.sort();
  console.log(sort);


  // var find = parsed.terms.find(function(thing) {
  //   if (nlp.text(thing) === 'Person');
  //   return thing;
  // })
  // console.log(find);


});