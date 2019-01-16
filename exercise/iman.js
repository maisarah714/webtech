$('.btnno').on('click',function(){
  //$(this) refrs to .calc-btn//for number
  $(".container").val($(".container").val()+$(this).val());
    if($(".container").val()!=''){//if display is not blank
      $(".container").val($(".container").val()+$(this).val());
    }
  });

//clear button
$(".clear-btn").on('click',function(){
  $(".container").val('');
});

$(".calculate-btn").on('click', function(){ //=
  var expression = $(".container").val();
  $(".container").val(eval(expression));
})
