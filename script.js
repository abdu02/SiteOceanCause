const selectElement = (s) => document.querySelector(s);


//abre o menu 
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//fecha o menu
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});