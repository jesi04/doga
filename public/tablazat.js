const URL = "https://filmjeim.eu:4000/kovetkezok.html?id=5&id=2";

feltolt();

async function feltolt() {
    const valasz = await fetch("/filmek");
    const filmjeim = await valasz.json();
    
    let filmHTML = "";
    for (egyFilm of filmjeim) {
        filmHTML += `<td>${egyFilm.id}</td>`;
        filmHTML += `<td>${egyFilm.cim}</td>`;
        filmHTML += `<td>${egyFilm.ev}</td>`;
        filmHTML += `<td>${egyFilm.hossz}</td>`;
        ;
    }
    document.getElementById('filmek').innerHTML = filmHTML;
}



/*
function hatterBe(filmId) {
  const sor = document.getElementById(filmId);
  sor.style.backgroundColor = "#CCF";
}
*/

/*
ne végső elemként írja ki a html állomány tartalmát, hanem két részben
Végső elemként ezt küldje ki:
<p>A következő film azonosítója amit meg fogok nézni:<span id="kovFilmId">IDE RKJA AZ ID-t</span></p></body></html>

JS-ben az értéket ki tudja nyerni:
const nextFilm= document.getElementById("kovFilmId").innerHTML;

További megfontolásokat a ZEAL dokumentációban is találhat.
*/