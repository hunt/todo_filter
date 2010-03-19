$(function(){
  $(".todo-check").click(function(){
    var node = $(this).parents('div.node');
    $.post('/todo/toggle/'+$(this).attr('rel'));
    $(this).parent().toggleClass('checked');
  });
});