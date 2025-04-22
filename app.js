document.addEventListener('DOMContentLoaded', () => {
    const pdfUrl = './assets/Shanmukha_poorna_chand.A.pdf';

    document.querySelector('.portfolio').forEach(button => {
        button.addEventListener('click', () => {
            window.open(pdfUrl, '_blank');
        });
    });
});
document.querySelector('.hire__me').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});