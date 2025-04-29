
function openModule(id) {
    document.querySelector('.modules').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
}
function goBack() {
    document.getElementById('content').classList.add('hidden');
    document.querySelector('.modules').style.display = 'flex';
}
function showContent(lesson) {
    document.getElementById('lesson-content').innerHTML = `<h2>${lesson}</h2><p>Conteúdo da aula aparecerá aqui após upload.</p>`;
}
function uploadFile(event) {
    const file = event.target.files[0];
    if (file) {
        alert("Arquivo " + file.name + " pronto para visualização (simulado)");
    }
}
