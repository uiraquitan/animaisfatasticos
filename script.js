function iniTabNav() {

  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabcontent.length) {

    tabcontent[0].classList.add('ativo');

    function activeTab(index) {

      tabcontent.forEach((content) => {
        content.classList.remove('ativo');
      });
      tabcontent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });

  }

}

iniTabNav();

function initAcordion() {

  const acordionList = document.querySelectorAll('.js-acordion dt');
  const ativoClass = 'ativo';
  if (acordionList.length) {

    acordionList[0].classList.add(ativoClass)
    acordionList[0].nextElementSibling.classList.add(ativoClass)

    function activeAccordion() {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }

    acordionList.forEach(acordion => {
      acordion.addEventListener("click", activeAccordion);
    })

  }
}

initAcordion();

function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

  if (linksInternos.length) {

    function scroolToSection(e) {
      e.preventDefault();

      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      const top = section.offsetTop;

      // window.scrollTo(0, section.offsetTop);

      // Forma alternativa
      // window.scrollTo({
      //   top: top,
      //   behavior: "smooth"
      // });

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });


    }

    linksInternos.forEach(link => {
      link.addEventListener('click', scroolToSection);
    });
  }

}
initScrollSuave();

function initAnimaAllScroll() {

  const sections = document.querySelectorAll('.js-scroll');
  sections[0].classList.add('ativo');
  function animaScroll() {
    sections.forEach(section => {
      const animaWindow = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - animaWindow) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');

      }

    });
  }

  window.addEventListener('scroll', animaScroll);
}

initAnimaAllScroll();