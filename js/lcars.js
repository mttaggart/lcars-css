$(document).ready(function(){
  $("input[type='checkbox'],input[type='radio']")
    .parent()
    .prepend("<svg class='lcars-svg'><rect class='lcars-control'></rect></svg>");
  $(".lcars-select-label").click(function(){
    $(this).children("select").focus();
  });
  $(".lcars-accordion-heading")
  .append(" <span class='fa fa-caret-down'></span>")
  .click(function(){
    $(this).parent().children(".lcars-accordion-content").slideToggle(200);
  });
  $(".dropdown").click(function(){
    $(this).children(".lcars-dropdown").slideToggle(200).
    mouseleave(function(){
      $(this).slideUp(200);
    });
  })
  $("input[type='checkbox']")
    .change(function(){
    if($(this).prop("checked")) {
      $(this).parent().addClass("checked");
      $(this).parent().find("rect").css("fill","yellow");
    } else {
      $(this).parent().removeClass("checked");
      $(this).parent().find("rect").css("fill","black");
    }
  });
  $("input[type='radio']").change(function(){
    $(this).parent().parent().find("rect").css("fill","black");
    $(this).parent().find("rect").css("fill","yellow");
  });
});
