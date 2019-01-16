$(".btnno button").on('click', function(){
  $("#showno").val($("#showno").val()+($(this).val()));
  $("#showno").text($("#showno").val());
});

$(".btncal button").on('click', function(){
  if ($(this).val()=="="){
    $("#totalno").text(eval($("#showno").val()));
  }
  else{
    $("#showno").val($("#showno").val()+($(this).val()));
    $("#showno").text($("#showno").val());
  }
});
