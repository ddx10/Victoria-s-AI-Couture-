document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';

            // Ocultar todas las respuestas
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

            // Alternar la visibilidad de la respuesta actual
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});
