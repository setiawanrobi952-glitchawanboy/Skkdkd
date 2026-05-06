function showPage(page) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    document.getElementById(page).style.display = 'block';
}

function kirimData(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;

    document.getElementById('hasil').innerHTML =
        "<p>Nama: " + nama + "</p><p>Email: " + email + "</p>";
}
