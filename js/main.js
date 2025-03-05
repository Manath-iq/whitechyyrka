// JavaScript для сайта в стиле 2000-х

// Функция для создания эффекта мигающего текста (дополнительно к CSS анимации)
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем эффект при наведении на фотографии
    const photoItems = document.querySelectorAll('.photo-item img');
    
    photoItems.forEach(function(photo) {
        photo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
            this.style.boxShadow = '0 0 10px #ff00ff';
        });
        
        photo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Добавляем приветственное сообщение при загрузке страницы
    setTimeout(function() {
        alert('✨ Добро пожаловать на мою страничку в стиле 2000-х! ✨');
    }, 1000);
    
    // Добавляем мигающий курсор для текстовых полей (если они будут добавлены)
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(function(input) {
        input.style.caretColor = '#ff00ff';
    });
});

// Функция для создания эффекта падающих блесток (можно активировать по клику)
function createGlitter() {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = Math.random() * 100 + '%';
    glitter.style.width = '10px';
    glitter.style.height = '10px';
    glitter.style.position = 'fixed';
    glitter.style.top = '-10px';
    glitter.style.background = 'radial-gradient(#fff, #ff66cc)';
    glitter.style.borderRadius = '50%';
    glitter.style.boxShadow = '0 0 5px #ff00ff';
    glitter.style.zIndex = '1000';
    glitter.style.opacity = Math.random() * 0.7 + 0.3;
    
    document.body.appendChild(glitter);
    
    let position = -10;
    const interval = setInterval(function() {
        position += 5;
        glitter.style.top = position + 'px';
        
        if (position > window.innerHeight) {
            clearInterval(interval);
            document.body.removeChild(glitter);
        }
    }, 50);
}

// Запускаем падающие блестки при клике на заголовок
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.glitter-text');
    title.addEventListener('click', function() {
        // Создаем несколько блесток при клике
        for (let i = 0; i < 20; i++) {
            setTimeout(function() {
                createGlitter();
            }, i * 50);
        }
    });
});