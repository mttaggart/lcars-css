$(document).ready(function(){
  $("input[type='checkbox'],input[type='radio']")
    .parent()
    .prepend("<svg class='lcars'><rect class='lcars-select'></rect></svg>")
  $("input[type='checkbox'],input[type='radio']")
    .change(function(){
    if($(this).prop("checked")) {
      $(this).parent().addClass("checked");
      $(this).parent().find("rect").css("fill","yellow");
    } else {
      $(this).parent().removeClass("checked");
      $(this).parent().find("rect").css("fill","black");
    }
    console.log($(this).parent().html())
  });
});
