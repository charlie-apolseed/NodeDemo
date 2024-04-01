



if ("geolocation" in navigator) {
    console.log('geolocation available')
    navigator.geolocation.getCurrentPosition(async position => {
        console.log(position.coords);
        const lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        const lng = position.coords.longitude;
        document.getElementById('longitude').textContent = lng

        async function postCords() {
            const data = {lat, lng};
        const options = {
            method: 'Post',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options)
        const returnData = await response.json();
        console.log(returnData);
        }

        document.getElementById('submit').onclick = postCords;
            
        var map = L.map('map').setView([lat, lng], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([lat, lng]).addTo(map);
    })
    /* geolocation is available */
} else {
    console.log('geolocation available')
    /* geolocation IS NOT available */
}
