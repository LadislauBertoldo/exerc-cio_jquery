$(document).ready(function () {
    $("form").on("submit", function (e) {
      e.preventDefault();
      const novaTarefa = $(".nova-tarefa").val();
  
      const listaTarefas = $(`<li class="work">${novaTarefa}</li>`);
      $(listaTarefas).appendTo("ul");
      $(".nova-tarefa").val("");
    });
  
    $("ul").on("click", "li", function () {
      $(this).toggleClass("risca-texto");
    });

  });
  