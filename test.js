const fs = require('fs');
async function test(url){
    try {
     const headers = {
            //'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', // => 200 OK
            //'User-Agent': 'Mozilla/5.0 (Linux; Android 13; SM-G991U1 Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile Safari/537.36', // => 403 forbiden
            'User-Agent': 'Mozilla/5.0 (Linux; Android 13; SM-G991U1 Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.107 Mobile Safari/537.36', // => 200 OK
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
            
        };
    
    const req = await fetch(url, {
        method: 'GET',
        headers: headers,
        timeout: 30000
    });
    const res = await req.text();
    console.log('Status code: ', req.status)
    console.log('Content-Type: ', req.headers.get('Content-Type'))
    let title = res.substring(res.indexOf('<title>')+7,res.indexOf('</title>'))
    console.log('Page title: ', title)
    } catch (error) {
        console.log(error)
    }
}
test("https://dilar.tube/")
test("https://hizomanga.net/")
//updateServers();

