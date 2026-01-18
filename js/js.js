const linksMenu = document.querySelectorAll('nav a[href^="#"]');
const secoes = document.querySelectorAll("section");

linksMenu.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  let posicao = window.scrollY + 200;

  secoes.forEach(secao => {
    if (
      posicao >= secao.offsetTop &&
      posicao < secao.offsetTop + secao.offsetHeight
    ) {
      linksMenu.forEach(l => l.classList.remove("ativo"));
      const linkAtivo = document.querySelector(
        `nav a[href="#${secao.id}"]`
      );
      if (linkAtivo) linkAtivo.classList.add("ativo");
    }
  });
});

