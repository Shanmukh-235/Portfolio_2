
const hireMeBtn = document.getElementById('hireMeBtn');
const downloadCvBtn = document.getElementById('downloadCvBtn');
hireMeBtn.addEventListener('click', () => {
    window.location.href = "mailto:shanmukhapoornachand14316@gmail.com"; 
});

downloadCvBtn.addEventListener('click', () => {
    window.open('./assets/Shanmukha_Poorna_Chand_A.pdf', '_blank'); 
});

