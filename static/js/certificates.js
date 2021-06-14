async function loadCertificates() {
    const response = await fetch('../static/json/certificates.json');
    const json = await response.json();

    const table = document.getElementById('certificates');

    table.innerHTML = json.certificates.map((certificate, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${certificate.title}</td>
            <td>${certificate.description}</td>
            <td>
                <a href="${certificate.path}" target="_blank">Ver más</a>
            </td>
        </tr>
    `
    ).join('');

}

document.addEventListener("DOMContentLoaded", function (event) {
    loadCertificates();
});