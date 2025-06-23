
const btn = document.getElementById("btn");
const karobka = document.getElementById("karobka");

async function getData() {
    const res = await fetch("https://ipinfo.io/json");
    const data = await res.json();
    console.log(data);
    chizish(data);
}

btn.addEventListener("click", () => {
    getData();
});

function chizish(malumot) {
    karobka.innerHTML = `
        <p>Kenglik: ${malumot.loc.split(",")[0]}</p>
        <p>Uzunlik: ${malumot.loc.split(",")[1]}</p>
        <p>Mamlakat: ${malumot.country}</p>
        <p>Shahar: ${malumot.city}</p>
        <p>IP Manzil : ${malumot.ip}</p>
        <p>INternet Provauder: ${malumot.org}</p>
        <div class="k" id="map">
            <iframe src="https://maps.google.com/maps?q=${
                malumot.loc.split(",")[0]
            },${malumot.loc.split(",")[1]}&z=14&output=embed"
            frameborder="0" style="width:100%; height:300px"></iframe>
        </div>
    `;
}
