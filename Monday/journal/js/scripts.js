//Business Logic
function journalEntry(date, paragraph) {
  this.date = date;
  this.paragraph = paragraph;
};




//User Interface Logic
$("form#entry").submit(function(event){
  event.preventDefault();


  var userDate=$("input#Date").val();
  var userBody=$("input#Body").val();

  var newEntry = new journalEntry(userDate, userBody);

  $("ul#journal-entries").prepend("<li><h2>" + newEntry.date + "</h2><br><p>" + newEntry.paragraph + "</p></li>");

  $("input#Date").val("");
  $("input#Body").val("");

});

//small change
