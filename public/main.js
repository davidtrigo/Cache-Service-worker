const div = document.querySelector('div');
const request = new Request('/api');
const cacheName = 'bcn'
let cache;
async function start() {
    cache = await caches.open(cacheName)
    let result = await getApi();
    div.textContent = JSON.stringify(result);
}


async function getApi() {
    let response = await cache.match(request);
    if (response) {
        return await response.json();
    }
    else {
        try {
            response = await fetch(request)
            await cache.put(request, response.clone());
            return await response.json();
        }
        catch (err) {
            console.log(err);
        }
    }
}
start();