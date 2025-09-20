// CondoWay - Script Principal
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa os ícones Feather
    feather.replace();
    
    // Smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Adiciona classe active na navegação baseada no scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Controla a visibilidade do botão scroll to top
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });
    
    // Adiciona animações aos elementos quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa cards de features e testemunhos
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
        observer.observe(card);
    });
    
    console.log('🚀 CondoWay - Sistema iniciado com sucesso!');
});
