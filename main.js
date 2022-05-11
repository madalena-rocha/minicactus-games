// Ajuste de carregamento da função onScroll
window.addEventListener('scroll', onScroll)

onScroll() // quando carregar o arquivo, execute o onScroll
function onScroll() { // o objetivo da função é gerencial os scrolls da página
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(games)
    activateMenuAtCurrentSection(news)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

// Dependendo da seção que tiver vendo na página, adicionar a classe ativa
function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    // scrollY + innerHeight / 2 é o cálculo para determinar a posição da linha imaginária
    
    // Verificar se o topo da seção passou da linha alvo
    
    const sectionTop = section.offsetTop
    
    const sectionHeight = section.offsetHeight
    
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // Verificar se a base da seção está abaixo da linha alvo

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    // no menu, procura pelos elementos a, procura pelo atributo href que contenha o atributo id da seção
    
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() { // o objetivo da função é mostrar o navigation ao fazer o scroll
    if (scrollY > 0) {
        navigation.classList.add('scroll')

    } else {
        navigation.classList.remove('scroll')
    }
}
   
function showBackToTopButtonOnScroll() { // o objetivo da função é mostrar o BackToTopButton ao fazer o scroll
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() { // a função será executada quando clicar nos botões de abrir e fechar o menu
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({ // quando iniciar o scroll, os elementos serão revelados de cima para baixo vagarosamente
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(` 
    #games,
    #games header,
    #games .card,
    #news,
    #news header,
    #news .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content`)