$("form#entry").submit(function(event){
  event.preventDefault();


  var userDate=$("input#Date").val();
  var userBody=$("input#Body").val();


  $("#submitted-date").append(userDate);
  $("#submitted-body").append(userBody);

  $("input#Date").val("");
  $("input#Body").val("");

});
