
function showContent(id) {
    document.querySelectorAll('.modulo-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}
