var intervalo;

function scrollDireita(a) {
  intervalo = setInterval(function () {
    if (a) {
      document.getElementById("scroller_").scrollLeft += 1;
    } else {
      document.getElementById("scroller").scrollLeft += 1;
    }
  }, 5);
}

function scrollEsquerda() {
  intervalo = setInterval(function () {
    document.getElementById("scroller").scrollLeft -= 1;
  }, 5);
}

function clearScroll() {
  clearInterval(intervalo);
}
