$(".btnno button").on('click',function(){
    $(".show").val($(".show").val()+$(this).val());
    $(".show").text($(".show").val());
});

$(".btncal button").on('click',function(){
  if($(this).attr('name')!='equal'){
    $(".show").val($(".show").val()+$(this).val());
    $(".show").text($(".show").val());
  }
  else{
    var expression = $(".show").val();
    $(".total").text(eval(expression));
  }
});
