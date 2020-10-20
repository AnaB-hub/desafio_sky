var intervalo;

function scrollDireita(classe) {
  intervalo = setInterval(function () {
    var class_select = "scroller_" + classe;
    document.getElementById(class_select).scrollLeft += 1;
  }, 5);
}

function scrollEsquerda(classe) {
  intervalo = setInterval(function () {
    var class_select = "scroller_" + classe;
    document.getElementById(class_select).scrollLeft -= 1;
  }, 5);
}

function clearScroll() {
  clearInterval(intervalo);
}
